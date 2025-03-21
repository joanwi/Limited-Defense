const games = [
    {
        id: 1,
        title: "Medieval Defense",
        description: "Defend your castle with medieval towers and units against waves of enemies.",
        image: "https://imgs2.dab3games.com/medieval-defense-game.png",
        category: "Tower Defense",
        url: "/games/medieval-defense"
    },
    {
        id: 2,
        title: "Castle Defense",
        description: "Strategic tower placement game with unique castle defense mechanics.",
        image: "https://imgs2.dab3games.com/castle-defense-game.jpg",
        category: "Strategy",
        url: "/games/castle-defense"
    },
    {
        id: 3,
        title: "Magic Defense",
        description: "Use magical towers and spells to defend against dark forces.",
        image: "https://imgs2.dab3games.com/magic-defense-game.jpg",
        category: "Magic",
        url: "/games/magic-defense"
    },
    {
        id: 4,
        title: "Defense Legends",
        description: "Epic tower defense with legendary heroes and powerful abilities.",
        image: "https://imgs2.dab3games.com/defense-legends-game.jpg",
        category: "RPG Defense",
        url: "/games/defense-legends"
    },
    {
        id: 5,
        title: "Space Defense",
        description: "Protect your space station from alien invasions with advanced technology.",
        image: "https://imgs2.dab3games.com/space-defense-game.jpg",
        category: "Sci-fi Defense",
        url: "/games/space-defense"
    },
    {
        id: 6,
        title: "Kingdom Rush",
        description: "Classic tower defense game with stunning graphics and epic battles.",
        image: "https://imgs2.dab3games.com/kingdom-rush-game.jpg",
        category: "Tower Defense",
        url: "/games/kingdom-rush"
    },
    {
        id: 7,
        title: "Zombie Defense",
        description: "Survive the zombie apocalypse by building strategic defenses.",
        image: "https://imgs2.dab3games.com/zombie-defense-game.jpg",
        category: "Survival Defense",
        url: "/games/zombie-defense"
    },
    {
        id: 8,
        title: "Plant Defense",
        description: "Use various plants to defend your garden from invading pests.",
        image: "https://imgs2.dab3games.com/plant-defense-game.jpg",
        category: "Casual Defense",
        url: "/games/plant-defense"
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