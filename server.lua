local QBCore = exports['qb-core']:GetCoreObject()

Citizen.CreateThread(function()
    for guidebookId, _ in pairs(Config.Guidebooks) do
        QBCore.Functions.CreateUseableItem(guidebookId, function(source, item)
            local src = source
            TriggerClientEvent('ml187-guidebooks:client:UseGuidebook', src, guidebookId)
        end)
    end
end)

QBCore.Commands.Add('giveguidebook', 'Give a guidebook to a player (Admin Only)', {
    {name = 'id', help = 'Player ID'},
    {name = 'guidebook', help = 'Guidebook ID (e.g., server_guide, rule_guide)'}
}, true, function(source, args)
    local src = source
    local targetId = tonumber(args[1])
    local guidebookId = args[2]
    
    if not Config.Guidebooks[guidebookId] then
        TriggerClientEvent('QBCore:Notify', src, 'Invalid guidebook ID', 'error')
        return
    end
    
    local target = QBCore.Functions.GetPlayer(targetId)
    if not target then
        TriggerClientEvent('QBCore:Notify', src, 'Player not found', 'error')
        return
    end
    
    target.Functions.AddItem(guidebookId, 1)
    TriggerClientEvent('inventory:client:ItemBox', targetId, QBCore.Shared.Items[guidebookId], 'add')
    TriggerClientEvent('QBCore:Notify', src, 'Guidebook given successfully', 'success')
    TriggerClientEvent('QBCore:Notify', targetId, 'You received a guidebook', 'success')
end, 'admin')
