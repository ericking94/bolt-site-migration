// Meta heroes data - Easy to update
export interface MetaHero {
  name: string;
  image: string;
  imagePosition?: string; // Nova propriedade para controlar posicionamento
  customStyles?: string; // Para comandos CSS personalizados
  horizontalAdjust?: string; // Para ajustes horizontais com Tailwind
  items?: string[]; // Array de URLs dos itens (máximo 6)
}

export interface MetaData {
  hardCarry: MetaHero[];
  mid: MetaHero[];
  offlaner: MetaHero[];
  support4: MetaHero[];
  support5: MetaHero[];
}

// Current meta heroes - Update these arrays to change the meta
export const currentMeta: MetaData = {
  hardCarry: [
    {
      name: "Nature's Prophet",
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/mjollnir.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/hurricane_pike.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/24/Daedalus_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png'
      ]
    },
    {
      name: 'Ursa',
      image: 'https://i.imgur.com/mGbVEWl.png',
      horizontalAdjust: 'translate-x-0', // Centralizado   
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bfury.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/abyssal_blade.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/swift_blink.png'
      ]
    },
    {
      name: 'Juggernaut',
      image: 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bfury.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/swift_blink.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png'
      ]
    },
    {
      name: 'Gyrocopter',
      image: 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/24/Daedalus_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png'
      ]
    },
    {
      name: 'Luna',
      image: 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/manta.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/butterfly.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/satanic.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png'
      ]
    }
  ],
  mid: [
    {
      name: 'Viper',
      image: 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/travel_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b6/Shiva%27s_Guard_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodstone.png'
      ]
    },
    {
      name: 'Storm Spirit',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b6/Shiva%27s_Guard_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/bloodthorn.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Kaya_and_Sange_icon.png'
      ]
    },
    {
      name: 'Leshrac',
      image: 'https://i.imgur.com/D7UW4Q0.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b6/Shiva%27s_Guard_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Kaya_and_Sange_icon.png'
      ]
    },
    {
      name: 'Queen of Pain',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/7/70/Dagon_5_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b6/Shiva%27s_Guard_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Kaya_and_Sange_icon.png'
      ]
    },
    {
      name: 'Ember',
      image: 'https://i.imgur.com/yYjUaIs.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/power_treads.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/18/Mage_Slayer_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b6/Shiva%27s_Guard_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Kaya_and_Sange_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png'
      ]
    }
  ],
  offlaner: [
    {
      name: 'Mars',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c8/Lotus_Orb_icon.png' 
      ]
    },
    {
      name: 'Axe',
      image: 'https://i.imgur.com/ClRjcBv.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blade_mail.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c8/Lotus_Orb_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png'
      ]
    },
    {
      name: 'Dawnbreaker',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e2/Refresher_Orb_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/13/Octarine_Core_icon.png'
      ]
    },
    {
      name: 'Legion Commander',
      image: 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/3/3c/Harpoon_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e2/Refresher_Orb_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png'
      ]
    },
    {
      name: 'Timbersaw',
      image: 'https://i.imgur.com/vfSeQO4.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b6/Shiva%27s_Guard_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Kaya_and_Sange_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c8/Lotus_Orb_icon.png'
      ]
    }
  ],
  support4: [
    {
      name: 'Snapfire',
      image: 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/94/Guardian_Greaves_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c8/Lotus_Orb_icon.png'
      ]
    },
    {
      name: 'Spirit Breaker',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/phase_boots.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2a/Spirit_Vessel_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/0f/Shadow_Blade_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/c/c8/Lotus_Orb_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/19/Yasha_and_Kaya_icon.png'
      ]
    },
    {
      name: 'Venomancer',
      image: 'https://i.imgur.com/L0rB0mb.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/94/Guardian_Greaves_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2a/Spirit_Vessel_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/1/13/Hurricane_Pike_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/lotus_orb.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/assault.png'
      ]
    },
    {
      name: 'Rubick',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png'
      ]
    },
    {
      name: 'Skywrath Mage',
      image: 'https://i.imgur.com/IQs7EN7.png',
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/66/Rod_of_Atos_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/6/67/Kaya_and_Sange_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/sheepstick.png'
      ]
    }
  ],
  support5: [
    {
      name: 'Jakiro',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png',
      imagePosition: 'left 15%', // Centralização ajustável via comando
      horizontalAdjust: 'translate-x-[-2px]', // Ajuste horizontal
      items: [
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/9/94/Guardian_Greaves_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png'
      ]
    },
    {
      name: 'Lion',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png',
      imagePosition: 'center 20%', // Centralização ajustável via comando
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tranquil_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png'
      ]
    },
    {
      name: 'Silencer',
      image: 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png',
      imagePosition: 'center 30%', // Centralização ajustável via comando
      horizontalAdjust: 'translate-x-[1px]', // Ajuste horizontal
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/octarine_core.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png'
      ]
    },
    {
      name: 'Crystal Maiden',
      image: 'https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png',
      imagePosition: 'center 25%', // Centralização ajustável via comando
      horizontalAdjust: 'translate-x-0', // Centralizado
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/tranquil_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/black_king_bar.png'
      ]
    },
    {
      name: 'Shadow Shaman',
      image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png',
      imagePosition: 'left 30%', // Centralização ajustável via comando
      horizontalAdjust: 'translate-x-[-1px]', // Ajuste horizontal
      items: [
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/arcane_boots.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/blink.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/glimmer_cape.png',
        'https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/refresher.png',
        'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items/force_staff.png'
      ]
    }
  ]
};

// Function to update meta heroes easily - includes position editing
export const updateMetaHeroes = (position: keyof MetaData, heroes: MetaHero[]) => {
  currentMeta[position] = heroes;
};

// Function to update hero image position for better centering
export const updateHeroImagePosition = (position: keyof MetaData, heroIndex: number, imagePosition: string) => {
  if (currentMeta[position] && currentMeta[position][heroIndex]) {
    currentMeta[position][heroIndex].imagePosition = imagePosition;
  }
};

// Function to update hero items
export const updateHeroItems = (position: keyof MetaData, heroIndex: number, items: string[]) => {
  if (currentMeta[position] && currentMeta[position][heroIndex]) {
    currentMeta[position][heroIndex].items = items.slice(0, 6); // Máximo 6 itens
  }
};
// Function to update hero horizontal adjustment
export const updateHeroHorizontalAdjust = (position: keyof MetaData, heroIndex: number, horizontalAdjust: string) => {
  if (currentMeta[position] && currentMeta[position][heroIndex]) {
    currentMeta[position][heroIndex].horizontalAdjust = horizontalAdjust;
  }
};

// Command line function to adjust hero positioning
export const adjustHeroPositioning = (command: string) => {
  // Format: "position:heroIndex:imagePosition"
  // Example: "support5:0:center 20%" to adjust Jakiro's position
  const parts = command.split(':');
  if (parts.length === 3) {
    const [position, indexStr, imagePosition] = parts;
    const heroIndex = parseInt(indexStr);
    
    if (position in currentMeta && !isNaN(heroIndex)) {
      updateHeroImagePosition(position as keyof MetaData, heroIndex, imagePosition);
      console.log(`Updated ${position} hero ${heroIndex} position to: ${imagePosition}`);
      return true;
    }
  }
  console.log('Invalid command format. Use: "position:heroIndex:imagePosition"');
  return false;
};

// Command line function to adjust hero horizontal positioning
export const adjustHeroHorizontal = (command: string) => {
  // Format: "position:heroIndex:horizontalAdjust"
  // Example: "support5:0:translate-x-[-2px]" to adjust Jakiro's horizontal position
  const parts = command.split(':');
  if (parts.length === 3) {
    const [position, indexStr, horizontalAdjust] = parts;
    const heroIndex = parseInt(indexStr);
    
    if (position in currentMeta && !isNaN(heroIndex)) {
      updateHeroHorizontalAdjust(position as keyof MetaData, heroIndex, horizontalAdjust);
      console.log(`Updated ${position} hero ${heroIndex} horizontal adjustment to: ${horizontalAdjust}`);
      return true;
    }
  }
  console.log('Invalid command format. Use: "position:heroIndex:horizontalAdjust"');
  return false;
};

// Command line function to adjust hero custom styles
export const adjustHeroStyles = (command: string) => {
  // Format: "position:heroIndex:customStyles"
  // Example: "support5:0:transform: translateX(-5px) translateY(-3px);" to adjust Jakiro's position
  const parts = command.split(':');
  if (parts.length >= 3) {
    const [position, indexStr, ...stylesParts] = parts;
    const customStyles = stylesParts.join(':');
    const heroIndex = parseInt(indexStr);
    
    if (position in currentMeta && !isNaN(heroIndex)) {
      if (currentMeta[position as keyof MetaData][heroIndex]) {
        currentMeta[position as keyof MetaData][heroIndex].customStyles = customStyles;
        console.log(`Updated ${position} hero ${heroIndex} custom styles to: ${customStyles}`);
        return true;
      }
    }
  }
  console.log('Invalid command format. Use: "position:heroIndex:customStyles"');
  return false;
};

// Command line function to update hero items
export const updateHeroItemsCommand = (command: string) => {
  // Format: "position:heroIndex:item1,item2,item3,item4,item5,item6"
  // Example: "support5:0:item1.png,item2.png,item3.png,item4.png,item5.png,item6.png"
  const parts = command.split(':');
  if (parts.length === 3) {
    const [position, indexStr, itemsStr] = parts;
    const heroIndex = parseInt(indexStr);
    const items = itemsStr.split(',').map(item => item.trim());
    
    if (position in currentMeta && !isNaN(heroIndex)) {
      updateHeroItems(position as keyof MetaData, heroIndex, items);
      console.log(`Updated ${position} hero ${heroIndex} items:`, items);
      return true;
    }
  }
  console.log('Invalid command format. Use: "position:heroIndex:item1,item2,item3,item4,item5,item6"');
  return false;
};
// Command line function to adjust hero horizontal positioning with object-position
export const adjustHeroHorizontalPosition = (command: string) => {
  // Format: "position:heroIndex:horizontalPosition"
  // Example: "support5:0:left" to move Jakiro's image to the left
  // Example: "support5:1:right" to move Lion's image to the right
  // Example: "support5:2:center" to center Witch Doctor's image
  // Example: "support5:3:25%" to position at 25% from left
  const parts = command.split(':');
  if (parts.length === 3) {
    const [position, indexStr, horizontalPos] = parts;
    const heroIndex = parseInt(indexStr);
    
    if (position in currentMeta && !isNaN(heroIndex)) {
      if (currentMeta[position as keyof MetaData][heroIndex]) {
        const hero = currentMeta[position as keyof MetaData][heroIndex];
        
        // Get current vertical position or default to center
        const currentPosition = hero.imagePosition || 'center center';
        const verticalPos = currentPosition.includes(' ') ? currentPosition.split(' ')[1] : 'center';
        
        // Create new position with updated horizontal value
        const newPosition = `${horizontalPos} ${verticalPos}`;
        hero.imagePosition = newPosition;
        
        console.log(`Updated ${position} hero ${heroIndex} horizontal position to: ${newPosition}`);
        console.log(`Hero: ${hero.name}`);
        return true;
      }
    }
  }
  console.log('Invalid command format. Use: "position:heroIndex:horizontalPosition"');
  console.log('Examples:');
  console.log('  adjustHeroHorizontalPosition("support5:0:left")');
  console.log('  adjustHeroHorizontalPosition("support5:1:right")');
  console.log('  adjustHeroHorizontalPosition("support5:2:center")');
  console.log('  adjustHeroHorizontalPosition("support5:3:25%")');
  console.log('  adjustHeroHorizontalPosition("hard-carry:0:60%")');
  return false;
};

// Command line function to adjust hero vertical positioning with object-position
export const adjustHeroVerticalPosition = (command: string) => {
  // Format: "position:heroIndex:verticalPosition"
  // Example: "support5:0:top" to move Jakiro's image to the top
  // Example: "support5:1:bottom" to move Lion's image to the bottom
  // Example: "support5:2:center" to center Witch Doctor's image vertically
  // Example: "support5:3:30%" to position at 30% from top
  const parts = command.split(':');
  if (parts.length === 3) {
    const [position, indexStr, verticalPos] = parts;
    const heroIndex = parseInt(indexStr);
    
    if (position in currentMeta && !isNaN(heroIndex)) {
      if (currentMeta[position as keyof MetaData][heroIndex]) {
        const hero = currentMeta[position as keyof MetaData][heroIndex];
        
        // Get current horizontal position or default to center
        const currentPosition = hero.imagePosition || 'center center';
        const horizontalPos = currentPosition.includes(' ') ? currentPosition.split(' ')[0] : 'center';
        
        // Create new position with updated vertical value
        const newPosition = `${horizontalPos} ${verticalPos}`;
        hero.imagePosition = newPosition;
        
        console.log(`Updated ${position} hero ${heroIndex} vertical position to: ${newPosition}`);
        console.log(`Hero: ${hero.name}`);
        return true;
      }
    }
  }
  console.log('Invalid command format. Use: "position:heroIndex:verticalPosition"');
  console.log('Examples:');
  console.log('  adjustHeroVerticalPosition("support5:0:top")');
  console.log('  adjustHeroVerticalPosition("support5:1:bottom")');
  console.log('  adjustHeroVerticalPosition("support5:2:center")');
  console.log('  adjustHeroVerticalPosition("support5:3:30%")');
  return false;
};

// Command line function to get current hero positioning info
export const getHeroPositionInfo = (command: string) => {
  // Format: "position:heroIndex" or "position" for all heroes in position
  const parts = command.split(':');
  
  if (parts.length === 1) {
    // Show all heroes in position
    const position = parts[0];
    if (position in currentMeta) {
      console.log(`\n=== ${position.toUpperCase()} HEROES ===`);
      currentMeta[position as keyof MetaData].forEach((hero, index) => {
        console.log(`${index}: ${hero.name}`);
        console.log(`   Image Position: ${hero.imagePosition || 'center center'}`);
        console.log(`   Horizontal Adjust: ${hero.horizontalAdjust || 'translate-x-0'}`);
        if (hero.customStyles) {
          console.log(`   Custom Styles: ${hero.customStyles}`);
        }
        console.log('');
      });
      return true;
    }
  } else if (parts.length === 2) {
    // Show specific hero
    const [position, indexStr] = parts;
    const heroIndex = parseInt(indexStr);
    
    if (position in currentMeta && !isNaN(heroIndex)) {
      const hero = currentMeta[position as keyof MetaData][heroIndex];
      if (hero) {
        console.log(`\n=== ${hero.name.toUpperCase()} (${position}:${heroIndex}) ===`);
        console.log(`Image Position: ${hero.imagePosition || 'center center'}`);
        console.log(`Horizontal Adjust: ${hero.horizontalAdjust || 'translate-x-0'}`);
        if (hero.customStyles) {
          console.log(`Custom Styles: ${hero.customStyles}`);
        }
        return true;
      }
    }
  }
  
  console.log('Invalid command format. Use:');
  console.log('  getHeroPositionInfo("support5") - Show all support5 heroes');
  console.log('  getHeroPositionInfo("support5:0") - Show specific hero');
  console.log('\nAvailable positions: hardCarry, mid, offlaner, support4, support5');
  return false;
};

// Batch command to adjust multiple heroes at once
export const batchAdjustHeroes = (commands: string[]) => {
  console.log(`\n=== BATCH ADJUSTING ${commands.length} HEROES ===`);
  let successCount = 0;
  
  commands.forEach((command, index) => {
    console.log(`\n${index + 1}. Processing: ${command}`);
    
    if (command.includes('horizontal:')) {
      const cleanCommand = command.replace('horizontal:', '');
      if (adjustHeroHorizontalPosition(cleanCommand)) successCount++;
    } else if (command.includes('vertical:')) {
      const cleanCommand = command.replace('vertical:', '');
      if (adjustHeroVerticalPosition(cleanCommand)) successCount++;
    } else if (command.includes('styles:')) {
      const cleanCommand = command.replace('styles:', '');
      if (adjustHeroStyles(cleanCommand)) successCount++;
    } else if (command.includes('items:')) {
      const cleanCommand = command.replace('items:', '');
      if (updateHeroItemsCommand(cleanCommand)) successCount++;
    } else {
      // Default to horizontal adjustment
      if (adjustHeroHorizontalPosition(command)) successCount++;
    }
  });
  
  console.log(`\n=== BATCH COMPLETE: ${successCount}/${commands.length} successful ===`);
  return successCount === commands.length;
};