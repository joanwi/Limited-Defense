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
        category: "Tower Defense",
        url: "/snake-shooter"
    },
    {
        id: 5,
        title: "Defender Idle 2",
        description: "Build and upgrade your defenses while earning resources automatically in this addictive idle tower defense game.",
        image: "./images/defender-idle-2.png",
        category: "Tower Defense",
        url: "/defender-idle-2"
    },
    {
        id: 6,
        title: "Bloons Tower Defense 4",
        description: "Classic tower defense game where you pop balloons with various monkey towers. Strategize and upgrade your defenses to stop the colorful balloon invasion!",
        image: "./images/bloons-tower-defense-4.png",
        category: "Tower Defense",
        url: "/bloons-tower-defense-4"
    },
    {
        id: 7,
        title: "Art of Defense",
        description: "Master the art of strategic defense in this visually stunning tower defense game. Place and upgrade your towers to create the perfect defense against waves of enemies.",
        image: "./images/art-of-defense.png",
        category: "Tower Defense",
        url: "/art-of-defense"
    },
    {
        id: 8,
        title: "World Z Defense",
        description: "Survive the zombie apocalypse in this thrilling tower defense game. Build and upgrade your defenses to protect humanity from the undead hordes.",
        image: "./images/world-z-defense.png",
        category: "Tower Defense",
        url: "/world-z-defense"
    },
    {
        id: 9,
        title: "Tower vs Goblins",
        description: "Defend your kingdom against invading goblins in this exciting tower defense game. Build and upgrade your towers to protect your territory from the relentless goblin hordes.",
        image: "./images/tower-vs-goblins.png",
        category: "Tower Defense",
        url: "/tower-vs-goblins"
    }
];




function getRelatedGames(currentGameId, limit) {
    return games
        .filter(game => game.id !== currentGameId) 
        .sort(() => Math.random() - 0.5) // random
        .slice(0, limit); 
}


function getGamesByCategory(category, limit) {
    return games
        .filter(game => game.category === category)
        .slice(0, limit);
}


function searchGames(query) {
    query = query.toLowerCase();
    return games.filter(game => 
        game.title.toLowerCase().includes(query) ||
        game.description.toLowerCase().includes(query) ||
        game.category.toLowerCase().includes(query)
    );
} 