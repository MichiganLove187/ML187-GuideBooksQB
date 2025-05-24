local QBCore = exports['qb-core']:GetCoreObject()
local isGuidebookOpen = false

local function OpenGuidebook(guidebookId)
    if isGuidebookOpen then return end
    
    local guidebook = Config.Guidebooks[guidebookId]
    if not guidebook then return end
    
    isGuidebookOpen = true
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = "openGuidebook",
        guidebook = guidebook,
        settings = Config.UI
    })
end

RegisterNUICallback('closeGuidebook', function(_, cb)
    isGuidebookOpen = false
    SetNuiFocus(false, false)
    cb('ok')
end)

RegisterNetEvent('ml187-guidebooks:client:UseGuidebook')
AddEventHandler('ml187-guidebooks:client:UseGuidebook', function(guidebookId)
    OpenGuidebook(guidebookId)
end)

RegisterCommand('closeGuidebook', function()
    if isGuidebookOpen then
        isGuidebookOpen = false
        SetNuiFocus(false, false)
        SendNUIMessage({
            action = "closeGuidebook"
        })
    end
end)

RegisterKeyMapping('closeGuidebook', 'Close Guidebook', 'keyboard', 'ESCAPE')
