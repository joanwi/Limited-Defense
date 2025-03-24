const games = [
    {
        id: 1,
        title: "Limited Defense",
        description: "Master the art of strategic defense in this challenging tower defense game",
        image: "./images/limited-defense.png",
        category: "Tower Defense",
        url: "/"
    },
    {
        id: 2,
        title: "Iron Towers Alliance",
        description: "Build powerful iron fortresses and forge alliances to defend against overwhelming enemy forces.",
        image: "./images/iron-towers-alliance.png",
        category: "Tower Defense",
        url: "/iron-towers-alliance"
    },
    {
        id: 3,
        title: "Tower Swap",
        description: "A unique tower defense game where you can swap tower positions to create the perfect defense strategy.",
        image: "./images/tower-swap.png",
        category: "Tower Defense",
        url: "/tower-swap"
    },
    {
        id: 4,
        title: "Snake Shooter",
        description: "Control a deadly snake and shoot your way through waves of enemies in this action-packed defense game.",
        image: "./images/snake-shooter.png",
        category: "Action Defense",
        url: "/snake-shooter"
    }
];



// 获取相关游戏的函数
function getRelatedGames(currentGameId, limit = 4) {
    return games
        .filter(game => game.id !== currentGameId) // 排除当前游戏
        .sort(() => Math.random() - 0.5) // 随机排序
        .slice(0, limit); // 限制返回数量
}

// 按分类获取游戏
function getGamesByCategory(category, limit = 4) {
    return games
        .filter(game => game.category === category)
        .slice(0, limit);
}

// 搜索游戏
function searchGames(query) {
    query = query.toLowerCase();
    return games.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query)
    );
} 