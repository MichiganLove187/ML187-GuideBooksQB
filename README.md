# ML187 Guidebooks

A guidebook system for QBCore servers. Create interactive, multi-page guidebooks for your server rules, tutorials, crafting guides, and more.

## Features

- Multiple guidebooks with unique content
- HTML-formatted pages with full styling support
- Easy to use item-based system
- Admin command to give guidebooks to players
- Customizable UI with configurable colors, fonts, and images
- Page-flipping animation with optional sound effects

## Installation

1. Download the resource
2. Place it in your server's resources folder
3. Add `ensure ml187-guidebooks` to your server.cfg
4. Add the guidebook items to your QBCore shared items (see below)
5. Restart your server

## Adding Items to QBCore

Add these items to your `qb-core/shared/items.lua` file:

```lua
["server_guide"] = {
    ["name"] = "server_guide",
    ["label"] = "Server Guide",
    ["weight"] = 100,
    ["type"] = "item",
    ["image"] = "server_guide.png",
    ["unique"] = false,
    ["useable"] = true,
    ["shouldClose"] = true,
    ["combinable"] = nil,
    ["description"] = "A comprehensive guide to the server."
},
["rule_guide"] = {
    ["name"] = "rule_guide",
    ["label"] = "Rule Book",
    ["weight"] = 100,
    ["type"] = "item",
    ["image"] = "rule_guide.png",
    ["unique"] = false,
    ["useable"] = true,
    ["shouldClose"] = true,
    ["combinable"] = nil,
    ["description"] = "Learn the rules of the server."
},
```

## Configuration

### Adding New Guidebooks

To add a new guidebook, add a new entry to the `Config.Guidebooks` table in `config.lua`:

```lua
["your_guidebook_id"] = {
    title = "Your Guidebook Title",
    pages = {
        {
            title = "Page Title",
            content = [[
                <h1>Your HTML Content</h1>
                <p>Write your content here with HTML formatting</p>
            ]]
        },
        -- Add more pages as needed
    }
},
```

Make sure to also add the corresponding item to your QBCore shared items with the same ID.

### HTML Formatting

You can use HTML to format your guidebook pages:

- `<h1>`, `<h2>`, `<h3>` - Headings
- `<p>` - Paragraphs
- `<ul>`, `<ol>`, `<li>` - Lists
- `<div>`, `<span>` - Containers
- `<img src="url">` - Images
- CSS classes and inline styles are also supported

### UI Customization

Modify the `Config.UI` settings in `config.lua` to customize the appearance:

```lua
Config.UI = {
    backgroundColor = "#1a1a1a",  -- Background color
    textColor = "#ffffff",        -- Text color
    accentColor = "#3498db",      -- Accent color for buttons, etc.
    fontFamily = "'Roboto', sans-serif",  -- Font family
    coverImage = "img/book_cover.png",    -- Cover image
    pageFlipSound = true,         -- Enable/disable page flip sound
}
```

## Commands

- `/giveguidebook [playerID] [guidebookID]` - Gives a guidebook to a player (admin only)

## Usage

1. Give players guidebook items through your inventory system, shops, or the admin command
2. Players can use the guidebook item from their inventory
3. The guidebook interface will open, allowing them to browse through pages
4. Press ESC to close the guidebook

## Dependencies

- QBCore Framework

## Credits

Created by ML187
