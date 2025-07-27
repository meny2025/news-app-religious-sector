document.addEventListener('DOMContentLoaded', () => {
    const newsContainer = document.getElementById('news-container');

    // פונקציה ליצירת כרטיס חדשות
    function createNewsCard(newsItem) {
        const card = document.createElement('div');
        card.classList.add('news-card');
        card.innerHTML = `
            <img src="${newsItem.image}" alt="${newsItem.title}">
            <div class="news-card-content">
                <h3>${newsItem.title}</h3>
                <p>${newsItem.summary}</p>
            </div>
        `;
        return card;
    }

    // פונקציה לדוגמה לטעינת חדשות (בהמשך נטען מהשרת/API)
    async function loadNews() {
        // מחיקת שלד הטעינה
        newsContainer.innerHTML = ''; 

        // כאן נבצע קריאת API לשרת הבאק-אנד כדי לקבל את החדשות האמיתיות.
        // לדוגמה: const response = await fetch('/api/news');
        // const newsData = await response.json();
        
        // כרגע, נשתמש בנתוני דמה:
        const dummyNews = [
            {
                title: "הגאון הרב שטרנבוך שליט''א בהתייחסות נדירה למצב",
                summary: "ראש הישיבה התייחס אמש במסיבת מלווה מלכה למצב הכללי ואמר כי...",
                image: "https://via.placeholder.com/400x200?text=רב+שטרנבוך"
            },
            {
                title: "גל חום כבד צפוי בסוף השבוע: משרד הבריאות מזהיר",
                summary: "הטמפרטורות יאמירו ויגיעו ל-40 מעלות ברוב חלקי הארץ...",
                image: "https://via.placeholder.com/400x200?text=גל+חום"
            },
            {
                title: "סיום הש"ס מרגש בבני ברק: אלפי לומדים חגגו",
                summary: "מעמד אדיר של סיום הש"ס התקיים באצטדיון העירוני, בהשתתפות גדולי ישראל...",
                image: "https://via.placeholder.com/400x200?text=סיום+השס"
            },
            {
                title: "תלמידי הישיבות יצאו ל'בין הזמנים' - היערכות מיוחדת",
                summary: "אלפי בחורים יצאו לחופשת הקיץ, וביישובים רבים נערכים לקליטתם...",
                image: "https://via.placeholder.com/400x200?text=בין+הזמנים"
            }
        ];

        dummyNews.forEach(newsItem => {
            const card = createNewsCard(newsItem);
            newsContainer.appendChild(card);
        });
    }

    loadNews(); // טען חדשות כשנכנסים למסך
});
