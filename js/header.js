// Header Component
function createHeader() {
    return `
    <header class="bg-blue-900 text-white shadow-lg">
        <!-- Navigation -->
        <nav class="container mx-auto px-4">
            <div class="flex justify-between items-center py-4">
                <!-- Logo -->
                <div class="flex items-center space-x-2">
                    <a href="/" class="flex items-center space-x-2">
                        <img src="images/Limited-Defense-logo.jpg" alt="Limited Defense Logo" class="h-6 w-auto">
                        <span class="text-2xl font-bold">Limited Defense</span>
                    </a>
                </div>
                <!-- Desktop Navigation -->
                <div class="hidden md:flex space-x-8">
                    <a href="/defense-games" class="text-white hover:text-blue-200 transition">Defense Games</a>
                    <a href="/iron-towers-alliance" class="text-white hover:text-blue-200 transition">New Games</a>
                    <a href="#" class="text-white hover:text-blue-200 transition">Popular</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="md:hidden text-white focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="/" class="block px-3 py-2 rounded-md text-white hover:bg-blue-800">Home</a>
                    <a href="/defense-games" class="block px-3 py-2 rounded-md text-white hover:bg-blue-800">Defense Games</a>
                    <a href="/iron-towers-alliance" class="block px-3 py-2 rounded-md text-white hover:bg-blue-800">New Games</a>
                    <a href="#" class="block px-3 py-2 rounded-md text-white hover:bg-blue-800">Popular</a>
                </div>
            </div>
        </nav>

        <!-- Search Bar Section -->
        <div class="py-4">
            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto">
                    <div class="flex">
                        <input type="text" 
                               placeholder="Search for defense games..." 
                               class="w-full px-6 py-3 rounded-l-lg focus:outline-none text-gray-800 text-lg"
                        >
                        <button class="bg-blue-600 px-8 py-3 rounded-r-lg hover:bg-blue-500 transition duration-200 flex items-center">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                            <span class="ml-2">Search</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Hero Section -->
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-4xl font-bold text-center" id="page-title"></h1>
            <p class="text-xl text-center mt-2 text-blue-200" id="page-description"></p>
        </div>
    </header>
    `;
}

// Function to set page title and description
function setPageTitle(title, description) {
    document.getElementById('page-title').textContent = title;
    document.getElementById('page-description').textContent = description;
}

// Function to initialize header
function initializeHeader() {
    // Insert header into the page
    document.body.insertAdjacentHTML('afterbegin', createHeader());
    
    // Initialize mobile menu
    initializeMobileMenu('mobile-menu-button', 'mobile-menu');
    
    // Initialize search functionality
    initializeSearch('input[type="text"]', 'button.bg-blue-600', 'related-games');
} 