// 页面生成器
class PageGenerator {
    constructor(games) {
        this.games = games;
        this.templates = {
            gamePage: this.gamePageTemplate,
            gameCard: this.gameCardTemplate
        };
    }

    // 游戏详情页模板
    gamePageTemplate(game) {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${game.title} - Play Online | Limited Defense</title>
    <meta name="description" content="${game.description}">
    <meta name="keywords" content="${game.title}, ${game.category}, defense game, online game">
    <link rel="canonical" href="https://limiteddefense.org/games/${game.id}" />
    <script src="/games.js"></script>
    <script src="/js/utils.js"></script>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <div id="nav-container"></div>

    <main class="container mx-auto px-4 py-8">
        <!-- Game Section -->
        <section class="mb-12">
            <div class="bg-white rounded-lg shadow-xl p-4">
                <div class="aspect-w-16 aspect-h-9">
                    <iframe src="${game.iframe_url}" 
                            class="w-full h-[600px] rounded-lg"
                            allow="fullscreen"
                            frameborder="0"
                            title="${game.title}">
                    </iframe>
                </div>
            </div>
        </section>

        <!-- Game Info -->
        <section class="mb-12">
            <h1 class="text-4xl font-bold mb-4">${game.title}</h1>
            <p class="text-lg text-gray-600">${game.description}</p>
        </section>

        <!-- Related Games -->
        <section class="mb-12">
            <h2 class="text-3xl font-bold mb-6">Related Games</h2>
            <div id="related-games" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Dynamically populated -->
            </div>
        </section>
    </main>

    <div id="footer-container"></div>

    <script>
        // 加载组件
        loadComponent('nav-container', '/components/navigation.html');
        loadComponent('footer-container', '/components/footer.html');

        // 显示相关游戏
        document.addEventListener('DOMContentLoaded', () => {
            const relatedGames = getRelatedGames(${game.id});
            renderGameGrid(relatedGames, 'related-games');
        });
    </script>
</body>
</html>`;
    }

    // 游戏卡片模板
    gameCardTemplate(game) {
        return `
<div class="game-card">
    <img src="${game.image}" alt="${game.title}">
    <h3>${game.title}</h3>
    <p>${game.description}</p>
    <a href="/games/${game.id}">Play Now</a>
</div>`;
    }

    // 生成单个游戏页面
    generateGamePage(game) {
        const html = this.templates.gamePage(game);
        // 在实际应用中，这里会写入文件系统
        return html;
    }

    // 生成所有游戏页面
    generateAllPages() {
        return this.games.map(game => this.generateGamePage(game));
    }

    // 生成网站地图
    generateSitemap() {
        const urls = this.games.map(game => `https://limiteddefense.org/games/${game.id}`);
        return `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(url => `
    <url>
        <loc>${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
    </url>
    `).join('')}
</urlset>`;
    }

    // 生成搜索索引
    generateSearchIndex() {
        return this.games.map(game => ({
            id: game.id,
            title: game.title,
            description: game.description,
            category: game.category,
            searchTerms: `${game.title} ${game.description} ${game.category}`.toLowerCase()
        }));
    }
}

// 使用示例
// const generator = new PageGenerator(games);
// generator.generateAllPages();
// generator.generateSitemap();
// const searchIndex = generator.generateSearchIndex(); 