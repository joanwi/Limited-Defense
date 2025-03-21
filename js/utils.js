// 渲染游戏卡片的函数
function renderGameCard(game) {
    return `
        <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <a href="${game.url}">
                <img src="${game.image}" alt="${game.title}" class="w-full h-48 object-cover hover:opacity-90 transition duration-300">
            </a>
            <div class="p-4">
                <h3 class="text-xl font-semibold text-blue-900 mb-2">${game.title}</h3>
                <p class="text-gray-600 text-sm mb-3 line-clamp-2" title="${game.description}">${game.description}</p>
                <div class="flex items-center justify-between">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">${game.category}</span>
                    <a href="${game.url}" class="text-blue-600 hover:text-blue-800 font-medium">Play</a>
                </div>
            </div>
        </div>
    `;
}

// 渲染游戏网格的函数
function renderGameGrid(games, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = games.map(game => renderGameCard(game)).join('');
    }
}

// 初始化搜索功能
function initializeSearch(searchInputSelector, searchButtonSelector, resultsContainerId) {
    const searchInput = document.querySelector(searchInputSelector);
    const searchButton = document.querySelector(searchButtonSelector);
    
    if (searchInput && searchButton) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length >= 2) {
                const searchResults = searchGames(query);
                renderGameGrid(searchResults, resultsContainerId);
            } else if (query.length === 0) {
                renderGameGrid(games, resultsContainerId);
            }
        });

        searchButton.addEventListener('click', () => {
            const query = searchInput.value;
            if (query.length > 0) {
                const searchResults = searchGames(query);
                renderGameGrid(searchResults, resultsContainerId);
            }
        });
    }
}

// 初始化移动端菜单
function initializeMobileMenu(buttonId, menuId) {
    const mobileMenuButton = document.getElementById(buttonId);
    const mobileMenu = document.getElementById(menuId);

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
} 