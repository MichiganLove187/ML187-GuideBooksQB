Config = {}

-- Guidebook Content
Config.Guidebooks = {
    ["server_guide"] = {
        title = "Server Guide",
        pages = {
            {
                title = "Welcome",
                content = [[
                    <h1>Welcome to Our Server!</h1>
                     <p>This guide will help you understand the basics of our server and how to get started.</p>
                    <h2>Key Features:</h2>
                    <ul>
                        <li>Custom jobs and activities</li>
                        <li>Player-driven economy</li>
                        <li>Unique roleplay experiences</li>
                    </ul>
                ]]
            },
            {
                title = "Getting Started",
                content = [[
                    <h1>Getting Started</h1>
                    <p>Here are some tips to help you get started on our server:</p>
                    <ul>
                        <li>Visit the job center to find work</li>
                        <li>Check out the bank to set up your finances</li>
                        <li>Meet other players and establish connections</li>
                    </ul>
                    <p>Remember to always follow the server rules and respect other players!</p>
                ]]
            },
            -- Add more pages as needed
        }
    },
    ["rule_guide"] = {
        title = "Rule Guide",
        pages = {
            {
                title = "RuleBook",
                content = [[
                    <h1>About</h1>
                    <p>Rules For.</p>
                    <h2>How to Craft:</h2>
                    <ol>
                        <li>Gather required materials</li>
                        <li>Find a crafting table</li>
                        <li>Access the crafting menu</li>
                        <li>Select the item you want to craft</li>
                    </ol>
                ]]
            },
            {
                title = "Rule Book",
                content = [[
                    <h1>RULES</h1>
                    <div class="recipe">
                        <h3>Lockpick</h3>
                        <ul>
                            <li>1x Metal Scrap</li>
                            <li>1x Iron</li>
                        </ul>
                    </div>
                    <div class="recipe">
                        <h3>Repair Kit</h3>
                        <ul>
                            <li>2x Metal Scrap</li>
                            <li>1x Rubber</li>
                            <li>1x Screwdriver</li>
                        </ul>
                    </div>
                ]]
            },
            -- Add more pages as needed
        }
    },
    -- Add more guidebooks as needed
}

-- UI Settings
Config.UI = {
    backgroundColor = "#1a1a1a",
    textColor = "#ffffff",
    accentColor = "#3498db",
    fontFamily = "'Roboto', sans-serif",
    coverImage = "img/book_cover.png", -- Path relative to html folder
    pageFlipSound = true,
}
