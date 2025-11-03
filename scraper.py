# scraper.py : génère data.json à partir de config.json (RSS)
import json, re, time, hashlib
from pathlib import Path
import feedparser  # bibliothèque qui lit les flux RSS

ROOT = Path(__file__).parent
CONFIG = ROOT / "config.json"
DATA = ROOT / "data.json"

def normalize(text):
    return re.sub(r"\s+", " ", (text or "")).strip()

def matches(text, keywords):
    if not keywords: return True
    t = text.lower()
    return any(k.lower() in t for k in keywords)

def collect_from_rss(url):
    items = []
    feed = feedparser.parse(url)
    for entry in feed.entries:
        title = normalize(getattr(entry, "title", ""))
        link = getattr(entry, "link", "")
        summary = normalize(getattr(entry, "summary", getattr(entry, "description", "")))
        if link:
            items.append({
                "title": title or "(sans titre)",
                "url": link,
                "summary": summary
            })
    return items

def main():
    cfg = json.loads(CONFIG.read_text(encoding="utf-8"))
    sources = cfg.get("sources", [])
    keywords = cfg.get("keywords", [])

    all_items = []
    for src in sources:
        url = src.get("url")
        try:
            for art in collect_from_rss(url):
                text = art["title"] + " " + art["summary"]
                if matches(text, keywords):
                    all_items.append(art)
        except Exception as e:
            print("Erreur sur", url, e)

    out = {
        "updated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "articles": all_items[:100]
    }
    DATA.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"✅ data.json mis à jour ({len(all_items)} articles)")

if __name__ == "__main__":
    main()
