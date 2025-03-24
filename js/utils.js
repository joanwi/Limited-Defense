// 渲染游戏卡片的函数
function renderGameCard(game) {
    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <a href="${game.url}">
                <img src="${game.image}" alt="${game.title}" class="w-full h-24 object-cover hover:opacity-90 transition duration-300">
            </a>
            <div class="p-2">
                <h3 class="text-sm font-semibold text-blue-900 truncate" title="${game.title}">${game.title}</h3>
                <p class="text-xs text-gray-600 truncate" title="${game.description}">${game.description}</p>
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