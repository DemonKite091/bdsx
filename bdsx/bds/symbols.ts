import { pdb } from "../core";
import { UNDNAME_NAME_ONLY } from "../dbghelp";

const symbols = [
    'ScriptEngine::~ScriptEngine',
    'ScriptEngine::startScriptLoading',
    'MinecraftServerScriptEngine::onServerThreadStarted',
    'std::thread::_Invoke<std::tuple<<lambda_58543e61c869eb14b8c48d51d3fe120b> >,0>',
    'ConsoleInputReader::getLine',
    '<lambda_58543e61c869eb14b8c48d51d3fe120b>::operator()',
    'ScriptEngine::initialize',
    'ScriptEngine::shutdown',
    'Level::createDimension',
    'Level::fetchEntity',
    'Level::getActivePlayerCount',
    'Crypto::Random::generateUUID',
    'Player::add',
    'Player::addLevels',
    'Player::attack',
    'Player::drop',
    'Player::getCarriedItem',
    'Player::getPlayerGameType',
    'Player::getSupplies',
    'Player::setName',
    'Player::take',
    'Player::_crit',
    'Player::respawn',
    'Player::teleportTo',
    'Player::startCooldown',
    'Player::getPlayerPermissionLevel',
    'Player::jumpFromGround',
    'Player::useItem',
    'Player::isSleeping',
    'Player::setSleeping',
    'Player::isJumping',
    'Player::setSize',
    'EnderChestContainer::startOpen',
    'EnderChestContainer::stopOpen',
    'ServerNetworkHandler::_getServerPlayer',
    'ServerNetworkHandler::allowIncomingConnections',
    'ServerNetworkHandler::disconnectClient',
    'ServerNetworkHandler::updateServerAnnouncement',
    'ServerNetworkHandler::setMaxNumPlayers',
    'ServerNetworkHandler::_onPlayerLeft',
    'ServerPlayer::changeDimension',
    'ServerPlayer::knockback',
    'ServerPlayer::openInventory',
    'ServerPlayer::sendInventory',
    'ServerPlayer::sendNetworkPacket',
    'ServerPlayer::setPlayerGameType',
    'MinecraftCommands::executeCommand',
    "ServerPlayer::`vftable'",
    'Actor::getHealth',
    'Actor::getMaxHealth',
    'Actor::addTag',
    'Actor::getNameTag',
    'Actor::getOffhandSlot',
    'Actor::getPos',
    'Actor::getRotation',
    'Actor::getRegionConst',
    'Actor::getUniqueID',
    'Actor::hasTag',
    'Actor::removeTag',
    'Actor::setNameTag',
    'Actor::setNameTagVisible',
    'Actor::hurt',
    'Actor::despawn',
    'Actor::getArmor',
    'Actor::burn',
    'Actor::setSneaking',
    'Actor::setScoreTag',
    'Actor::getScoreTag',
    'Actor::isSneaking',
    'ExtendedCertificate::getXuid',
    'ExtendedCertificate::getIdentityName',
    'ExtendedCertificate::getIdentity',
    'MinecraftPackets::createPacket',
    'BedrockLogOut',
    'DedicatedServer::stop',
    'NetworkIdentifier::operator==',
    'CommandOutputSender::send',
    'ServerInstance::ServerInstance',
    'ServerInstance::disconnectAllClientsWithMessage',
    'NetworkHandler::_getConnectionFromId',
    'NetworkHandler::send',
    'LoopbackPacketSender::sendToClients',
    'NetworkHandler::_sortAndPacketizeEvents',
    'NetworkHandler::_sendInternal',
    'PacketViolationHandler::_handleViolation',
    'Level::removeEntityReferences',
    'Actor::~Actor',
    'ScriptEngine::_processSystemInitialize',
    'NetworkIdentifier::getHash',
    'BatchedNetworkPeer::sendPacket',
    'Json::Value::isMember',
    'Json::Value::~Value',
    'Json::Value::getMemberNames',
    'Json::Value::size',
    'Json::Value::resolveReference',
    'MinecraftServerScriptEngine::onServerUpdateEnd',
    'printf',
    "ServerCommandOrigin::`vftable'",
    "ScriptCommandOrigin::`vftable'",
    'Minecraft::getLevel',
    'Minecraft::getNetworkHandler',
    'Minecraft::getServerNetworkHandler',
    'Minecraft::getCommands',
    'Minecraft::startLeaveGame',
    'std::basic_string<char,std::char_traits<char>,std::allocator<char> >::_Tidy_deallocate',
    "std::_Ref_count_obj2<CommandContext>::`vftable'",
    'CommandContext::CommandContext',
    'CommandVersion::CurrentVersion',
    'ServerCommandOrigin::ServerCommandOrigin',
    'ScriptApi::ScriptFramework::registerConsole',
    'ConsoleInputReader::ConsoleInputReader',
    'ConsoleInputReader::~ConsoleInputReader',
    'ConsoleInputReader::unblockReading',
    'Item::allowOffhand',
    'Item::isDamageable',
    'Item::isFood',
    'Item::getCreativeCategory',
    'Item::setAllowOffhand',
    'ItemStackBase::getId',
    'ItemStackBase::getItem',
    'ItemStackBase::getName',
    'ItemStackBase::getUserData',
    'ItemStackBase::hasCustomHoverName',
    'ItemStackBase::isBlock',
    'ItemStackBase::isNull',
    'ItemStackBase::setCustomName',
    'ItemStackBase::getEnchantValue',
    'ItemStackBase::isEnchanted',
    'ItemStackBase::setCustomLore',
    'ItemStackBase::setDamageValue',
    'ItemStackBase::startCoolDown',
    'ItemStackBase::load',
    'ItemStackBase::isStackedByData',
    'ItemStackBase::isStackable',
    'ItemStackBase::isWearableItem',
    'ItemStackBase::isPotionItem',
    'ItemStackBase::isPattern',
    'ItemStackBase::isMusicDiscItem',
    'ItemStackBase::isLiquidClipItem',
    'ItemStackBase::isHorseArmorItem',
    'ItemStackBase::isGlint',
    'ItemStackBase::isFullStack',
    'ItemStackBase::isFireResistant',
    'ItemStackBase::isExplodable',
    'ItemStackBase::isDamaged',
    'ItemStackBase::isDamageableItem',
    'ItemStackBase::isArmorItem',
    'ItemStackBase::getComponentItem',
    'ItemStackBase::getMaxDamage',
    'ItemStackBase::getDamageValue',
    'ItemStackBase::getAttackDamage',
    'Item::getCommandNames',
    'PlayerInventory::add',
    'PlayerInventory::clearSlot',
    'PlayerInventory::getContainerSize',
    'PlayerInventory::getFirstEmptySlot',
    'PlayerInventory::getHotbarSize',
    'PlayerInventory::getItem',
    'PlayerInventory::getSelectedItem',
    'PlayerInventory::getSlotWithItem',
    'PlayerInventory::getSlots',
    'PlayerInventory::removeItem',
    'PlayerInventory::selectSlot',
    'PlayerInventory::setItem',
    'PlayerInventory::setSelectedItem',
    'PlayerInventory::swapSlots',
    'CommandRegistry::registerCommand',
    'CommandRegistry::registerAlias',
    'CommandRegistry::findCommand',
    'CommandRegistry::registerOverloadInternal',
    'CommandRegistry::serializeAvailableCommands',
    'BlockSource::mayPlace',
    'BlockSource::checkBlockDestroyPermissions',
    'Block::getName',
    'BlockLegacy::getCreativeCategory',
    'BlockLegacy::setDestroyTime',
    'BlockLegacy::getCommandNames',
    'RakNetServerLocator::_announceServer',
    'HealthAttributeDelegate::change',
    'MinecraftCommands::getRegistry',
    'MinecraftCommands::handleOutput',
    'CommandOutput::getType',
    'CommandSelectorBase::CommandSelectorBase',
    'CommandSelectorBase::~CommandSelectorBase',
    'CommandSelectorBase::newResults',
    'CommandItem::createInstance',
    'CommandMessage::getMessage',
    'ScriptServerActorEventListener::onActorSneakChanged',
    'ScriptServerActorEventListener::onActorCreated',
    'ScriptServerActorEventListener::onActorDeath',
    'ScriptServerActorEventListener::onActorRemoved',
    'Dimension::getDimensionId',
    'TeleportCommand::computeTarget',
    'TeleportCommand::applyTarget',
    'ActorCommandOrigin::ActorCommandOrigin',
    "MinecraftCommands::`vftable'",
    "CommandOutputSender::`vftable'",
    "Minecraft::`vftable'",
    'Actor::getCommandPermissionLevel',
    'Player::getCommandPermissionLevel',
    'Actor::getDimension',
    'Actor::getDimensionId',
    'Actor::getAttributes',
    'Actor::getRuntimeID',
    'Actor::startRiding',
    'Actor::stopRiding',
    'Actor::hasEffect',
    'Actor::getEffect',
    'Actor::tryGetFromEntity',
    'Mob::die',
    'Abilities::getCommandPermissions',
    'Abilities::getPlayerPermissions',
    'Abilities::setCommandPermissions',
    'Abilities::setPlayerPermissions',
    'Abilities::getAbility',
    'Abilities::setAbility',
    'Ability::getBool',
    'Ability::getFloat',
    'Ability::setBool',
    'AdventureSettingsPacket::AdventureSettingsPacket',
    'Level::destroyBlock',
    'Level::getActorFactory',
    'Level::getAdventureSettings',
    'Level::getScoreboard',
    'Level::getTagRegistry',
    'Level::updateWeather',
    'Level::save',
    'Level::tick',
    'Level::getUsers',
    'Level::getEntities',
    'Level::getRuntimeEntity',
    'Level::getRuntimePlayer',
    'ServerLevel::setCommandsEnabled',
    'ServerLevel::setShouldSendSleepMessage',
    'CommandUtils::createItemStack',
    'Scoreboard::addObjective',
    'Scoreboard::getCriteria',
    'Scoreboard::getDisplayObjective',
    'Scoreboard::getObjective',
    'Scoreboard::getObjectiveNames',
    'Scoreboard::getObjectives',
    'Scoreboard::removeObjective',
    'ServerScoreboard::clearDisplayObjective',
    'ServerScoreboard::setDisplayObjective',
    'ServerScoreboard::onScoreChanged',
    'Objective::getPlayers',
    'Objective::getPlayerScore',
    'ScoreboardIdentityRef::modifyScoreInObjective',
    'Scoreboard::getScoreboardIdentityRef',
    'InventoryTransaction::addItemToContent',
    'InventoryTransaction::getActions',
    'InventoryTransactionItemGroup::getItemInstance',
    'MobEffect::getById',
    'PlayerListPacket::emplace',
    'Player::getSkin',
    "ItemActor::`vftable'",
    'ServerPlayer::_nextContainerCounter',
    'EnchantUtils::getEnchantLevel',
    'EnchantUtils::hasCurse',
    'EnchantUtils::hasEnchant',
    'Level::getSeed',
    'SharedConstants::CurrentGameSemVersion',
    'SharedConstants::NetworkProtocolVersion',
    'Level::getBlockPalette',
    'ItemStack::fromDescriptor',
    'Level::getDimension',
    'Block::getDescriptionId',
    'Block::getRuntimeId',
    'Dimension::getBlockSourceDEPRECATEDUSEPLAYERREGIONINSTEAD',
    'FarmBlock::transformOnFall',
    'SplashPotionEffectSubcomponent::doOnHitEffect',
    'Scoreboard::getScoreboardIdentityRefs',
    'ScoreboardIdentityRef::modifyScoreInObjective',
    'Scoreboard::getTrackedIds',
    'ItemStackBase::getRawNameId',
    'ItemStackBase::_setItem',
    'ItemStackBase::constructItemEnchantsFromUserData',
    'CommandUtils::spawnEntityAt',
    'Actor::startSwimming',
    'Player::startSwimming',
    'RakNetInstance::getPort',
    'ScoreboardIdentityRef::removeFromObjective',
    'ActorDamageSource::ActorDamageSource',
    'ActorDamageSource::getDamagingEntityUniqueID',
    'ActorDamageSource::setCause',
    'Player::inventoryChanged',
    'ItemStackBase::getMaxStackSize',
    'ItemStack::clone',
    'ItemStackBase::toString',
    'ItemStackBase::toDebugString',
    'ItemStackBase::getAuxValue',
    'ItemStackBase::setAuxValue',
    'ArmorItem::getArmorValue',
    'Mob::getArmorValue',
    'IdentityDefinition::getEntityId',
    'IdentityDefinition::getPlayerId',
    'IdentityDefinition::getFakePlayerName',
    'IdentityDefinition::getIdentityType',
    'Level::getGameRules',
    'Abilities::getAbilityName',
    'Abilities::nameToAbilityIndex',
    'GameRules::nameToGameRuleIndex',
    'GameRules::getRule',
    'GameRules::hasRule',
    'GameRules::createAllGameRulesPacket',
    'GameRule::getBool',
    'GameRule::getInt',
    'GameRule::getFloat',
    'Level::hasCommandsEnabled',
    'Level::getLevelData',
    'LevelData::getGameDifficulty',
    'LevelData::setGameDifficulty',
    'OwnerStorageEntity::_getStackRef',
    'Actor::getActorIdentifier',
    'Level::getTime',
    'Level::setTime',
    'Actor::getLevel',
    'Level::getSpawner',
    'Spawner::spawnItem',
    'Spawner::spawnMob',
    'BlockPalette::getBlockLegacy',
    'BlockLegacy::getRenderBlock',
    'ServerPlayer::setArmor',
    'ProjectileComponent::shoot',
    'EntityContextBase::isValid',
    'EntityContextBase::_enttRegistry',
    'Player::clearRespawnPosition',
    'Player::hasRespawnPosition',
    'Player::setRespawnPosition',
    'Player::setBedRespawnPosition',
    'Player::getSpawnDimension',
    'Player::getSpawnPosition',
    'Container::getSlots',
    'Container::getItemCount',
    'Container::getContainerType',
    'Container::setCustomName',
    'Inventory::dropSlot',
    'BlockSource::getChunk',
    'BlockSource::getChunkAt',
    'BlockSource::getChunkSource',
    'Dimension::getChunkSource',
    'LevelChunk::getBiome',
    'LevelChunk::getLevel',
    'LevelChunk::getPosition',
    'LevelChunk::getMin',
    'LevelChunk::getMax',
    'LevelChunk::toWorldPos',
    'ChunkSource::getLevel',
    'Biome::getBiomeType',
    'Attribute::getByName',
    'ItemStackBase::saveEnchantsToUserData',
    'BlockEventCoordinator::sendBlockDestructionStarted',
    'Level::getCurrentTick',
    'Player::getDestroySpeed',
    'Player::canDestroy',
    'Player::addExperience',
    'Player::getXpNeededForNextLevel',
] as const;

// decorated symbols
const symbols2 = [
    'sprintf',
    'vsnprintf',
    '??$_Allocate@$0BA@U_Default_allocate_traits@std@@$0A@@std@@YAPEAX_K@Z',
    '?ToString@SystemAddress@RakNet@@QEBAX_NPEADD@Z',
    '??0?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@QEAA@XZ',
    '??_7ServerInstance@@6BEnableNonOwnerReferences@Bedrock@@@',
    '??_7NetworkHandler@@6BIGameConnectionInfoProvider@Social@@@',
    '??_7ServerNetworkHandler@@6BNetEventCallback@@@',
    '??_7RakNetInstance@@6BConnector@@@',
    '??_7RakPeer@RakNet@@6BRakPeerInterface@1@@',
    '??AValue@Json@@QEAAAEAV01@H@Z',
    '??AValue@Json@@QEAAAEAV01@PEBD@Z',
    '??0Value@Json@@QEAA@W4ValueType@1@@Z',
    '??0Value@Json@@QEAA@AEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z',
    '??$getline@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@YAAEAV?$basic_istream@DU?$char_traits@D@std@@@0@$$QEAV10@AEAV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@0@D@Z',
    '??_7MinecraftServerScriptEngine@@6BScriptFramework@ScriptApi@@@',
    '??_7MinecraftServerScriptEngine@@6B@',
    '?computeHash@HashedString@@SA_KAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z',
    '?getMutableInstance@BaseAttributeMap@@QEAAPEAVAttributeInstance@@I@Z',
    '?_spawnMovingBlocks@PistonBlockActor@@AEAAXAEAVBlockSource@@@Z',
    '??_7OverworldDimension@@6BLevelListener@@@',
    '??_7ServerLevel@@6BILevel@@@',
    '??0CommandOutput@@QEAA@W4CommandOutputType@@@Z',
    '?explode@Level@@UEAAXAEAVBlockSource@@PEAVActor@@AEBVVec3@@M_N3M3@Z',
    '??0MobEffectInstance@@QEAA@IHH_N00@Z',
    '?addEffect@Actor@@QEAAXAEBVMobEffectInstance@@@Z',
    '?removeEffect@Actor@@QEAAXH@Z',
    '?getScoreboardId@Scoreboard@@QEBAAEBUScoreboardId@@AEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@Z',
    '?getScoreboardId@Scoreboard@@QEBAAEBUScoreboardId@@AEBVActor@@@Z',
    '?getScoreboardId@Scoreboard@@QEBAAEBUScoreboardId@@AEBVPlayer@@@Z',
    '?resetPlayerScore@Scoreboard@@QEAAXAEBUScoreboardId@@AEAVObjective@@@Z',
    '?setBlock@BlockSource@@QEAA_NHHHAEBVBlock@@H@Z',
    '??0PlayerListEntry@@QEAA@AEBVPlayer@@@Z',
    '?applyEnchant@EnchantUtils@@SA_NAEAVItemStackBase@@W4Type@Enchant@@H_N@Z',
    '??0ActorDefinitionIdentifier@@QEAA@W4ActorType@@@Z',
    '?success@CommandOutput@@QEAAXXZ',
    '?success@CommandOutput@@QEAAXAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBV?$vector@VCommandOutputParameter@@V?$allocator@VCommandOutputParameter@@@std@@@3@@Z',
    '?error@CommandOutput@@QEAAXAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBV?$vector@VCommandOutputParameter@@V?$allocator@VCommandOutputParameter@@@std@@@3@@Z',
    '?tryLightFire@CampfireBlock@@SA_NAEAVBlockSource@@AEBVBlockPos@@@Z',
    '?tryDouseFire@CampfireBlock@@SA_NAEAVBlockSource@@AEBVBlockPos@@_N@Z',
    '?setStatusFlag@Actor@@QEAA_NW4ActorFlags@@_N@Z',
    '?getStatusFlag@Actor@@QEBA_NW4ActorFlags@@@Z',
    '?sameItem@ItemStackBase@@QEBA_NAEBV1@@Z',
    '??0UpdateBlockPacket@@QEAA@AEBVBlockPos@@IIE@Z',
    '?GetAveragePing@RakPeer@RakNet@@UEAAHUAddressOrGUID@2@@Z',
    '?GetLastPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z',
    '?GetLowestPing@RakPeer@RakNet@@UEBAHUAddressOrGUID@2@@Z',
    '??0NetworkItemStackDescriptor@@QEAA@AEBVItemStack@@@Z',
    '?spawnParticleEffect@Level@@UEAAXAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBVVec3@@PEAVDimension@@@Z',
    '?addEnumValues@CommandRegistry@@QEAAHAEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBV?$vector@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@V?$allocator@V?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@@2@@3@@Z',
    '??$try_get@VUserEntityIdentifierComponent@@@?$basic_registry@VEntityId@@@entt@@QEBA?A_PVEntityId@@@Z',
    '?getBlock@BlockSource@@UEBAAEBVBlock@@AEBVBlockPos@@@Z',
    '?onConnectionClosed@NetworkHandler@@EEAAXAEBVNetworkIdentifier@@AEBV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@_N@Z',
    '?toWide@String@Core@@SA?AV?$basic_string@_WU?$char_traits@_W@std@@V?$allocator@_W@2@@std@@PEBD@Z',
    '?toWide@String@Core@@SA?AV?$basic_string@_WU?$char_traits@_W@std@@V?$allocator@_W@2@@std@@V?$basic_string_span@$$CBD$0?0@gsl@@@Z',
] as const;

export const proc = pdb.getList(
    pdb.coreCachePath,
    {},
    symbols,
    false,
    UNDNAME_NAME_ONLY
);
export const proc2 = pdb.getList(pdb.coreCachePath, {}, symbols2);

pdb.close();
