import { useStaticQuery, graphql } from 'gatsby';

import { Hero, HeroType, HeroRank } from './types';

const useHeroData = (): Hero[] => {
  const query = useStaticQuery(graphql`
    query Avatars {
      frogMan: file(relativePath: { eq: "heroes/frog-man.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      eyelashes: file(relativePath: { eq: "heroes/eyelashes.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      lily: file(relativePath: { eq: "heroes/lily.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      skson: file(relativePath: { eq: "heroes/sky-king-son.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      slugrus: file(relativePath: { eq: "heroes/slugrus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      groundd: file(relativePath: { eq: "heroes/ground-dragon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      car: file(relativePath: { eq: "heroes/car.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      niceguy: file(relativePath: { eq: "heroes/jet-nice-guy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      hammerhead: file(relativePath: { eq: "heroes/hammerhead.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      ttblackhole: file(relativePath: { eq: "heroes/tank-top-blackhole.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      mumen: file(relativePath: { eq: "heroes/mumen-rider.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      snek: file(relativePath: { eq: "heroes/snek.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      okama: file(relativePath: { eq: "heroes/okamaitachi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      bushi: file(relativePath: { eq: "heroes/bushidrill.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      smile: file(relativePath: { eq: "heroes/smile-man.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      iairon: file(relativePath: { eq: "heroes/iairon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      mustachio: file(relativePath: { eq: "heroes/mustachio.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      gball: file(relativePath: { eq: "heroes/goldenball.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sking: file(relativePath: { eq: "heroes/sub-king.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      sonic: file(relativePath: { eq: "heroes/sonic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      mbat: file(relativePath: { eq: "heroes/metal-bat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      konbu: file(relativePath: { eq: "heroes/konbu-infinity.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      vman: file(relativePath: { eq: "heroes/vaccine-man.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      mgirl: file(relativePath: { eq: "heroes/mosquito-girl.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      melzar: file(relativePath: { eq: "heroes/melzargard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      gery: file(relativePath: { eq: "heroes/geryuganshoop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      blizzard: file(relativePath: { eq: "heroes/hellish-blizzard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      tornado: file(relativePath: { eq: "heroes/terrible-tornado.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      g4: file(relativePath: { eq: "heroes/g4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      fuke: file(relativePath: { eq: "heroes/fukegao.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      genus: file(relativePath: { eq: "heroes/dr-genus.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      gorilla: file(relativePath: { eq: "heroes/armored-gorilla.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      bfire: file(relativePath: { eq: "heroes/blue-fire.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      genos: file(relativePath: { eq: "heroes/genos.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      mknight: file(relativePath: { eq: "heroes/metal-knight.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      cemperor: file(relativePath: { eq: "heroes/child-emperor.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      htloin: file(relativePath: { eq: "heroes/heavy-tank-loincloth.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      max: file(relativePath: { eq: "heroes/lightning-max.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      bking: file(relativePath: { eq: "heroes/beast-king.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      puri: file(relativePath: { eq: "heroes/puripuri.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      ttmaster: file(relativePath: { eq: "heroes/tanktop-master.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      amai: file(relativePath: { eq: "heroes/amai-mask.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      kabuto: file(relativePath: { eq: "heroes/carnage-kabuto.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      alloy: file(relativePath: { eq: "heroes/superalloy.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      bang: file(relativePath: { eq: "heroes/bang.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      groribas: file(relativePath: { eq: "heroes/groribas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      skyking: file(relativePath: { eq: "heroes/sky-king.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      garou: file(relativePath: { eq: "heroes/garou.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      amg: file(relativePath: { eq: "heroes/awakened-mg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      stinger: file(relativePath: { eq: "heroes/stinger.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 245) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  const heroes: Hero[] = [
    {
      name: 'Frog Man',
      type: HeroType.weapon,
      initialRank: HeroRank.rare,
      avatar: query.frogMan.childImageSharp.fluid,
    },
    {
      name: 'Eyelashes',
      type: HeroType.weapon,
      initialRank: HeroRank.rare,
      avatar: query.eyelashes.childImageSharp.fluid,
    },
    {
      name: 'Tripple-Staff Lily',
      type: HeroType.weapon,
      initialRank: HeroRank.rare,
      avatar: query.lily.childImageSharp.fluid,
    },
    {
      name: `Sky King's Son`,
      type: HeroType.psychic,
      initialRank: HeroRank.rare,
      avatar: query.skson.childImageSharp.fluid,
    },
    {
      name: 'Slugrus',
      type: HeroType.psychic,
      initialRank: HeroRank.rare,
      avatar: query.slugrus.childImageSharp.fluid,
    },
    {
      name: 'Ground Dragon',
      type: HeroType.psychic,
      initialRank: HeroRank.rare,
      avatar: query.groundd.childImageSharp.fluid,
    },
    {
      name: 'Super Custom YO649Z Mk. II',
      type: HeroType.hiTech,
      initialRank: HeroRank.rare,
      avatar: query.car.childImageSharp.fluid,
    },
    {
      name: 'Jet Niceguy',
      type: HeroType.hiTech,
      initialRank: HeroRank.rare,
      avatar: query.niceguy.childImageSharp.fluid,
    },
    {
      name: 'Hammerhead',
      type: HeroType.hiTech,
      initialRank: HeroRank.rare,
      avatar: query.hammerhead.childImageSharp.fluid,
    },
    {
      name: 'Tank-top Blackhole',
      type: HeroType.physical,
      initialRank: HeroRank.rare,
      avatar: query.ttblackhole.childImageSharp.fluid,
    },
    {
      name: 'Mumen Rider',
      type: HeroType.physical,
      initialRank: HeroRank.rare,
      avatar: query.mumen.childImageSharp.fluid,
    },
    {
      name: 'Snek',
      type: HeroType.physical,
      initialRank: HeroRank.rare,
      avatar: query.snek.childImageSharp.fluid,
    },
    {
      name: 'Okamaitachi',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.okama.childImageSharp.fluid,
    },
    {
      name: 'Bushidrill',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.bushi.childImageSharp.fluid,
    },
    {
      name: 'Smile Man',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.smile.childImageSharp.fluid,
    },
    {
      name: 'Iairon',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.iairon.childImageSharp.fluid,
    },
    {
      name: 'Spring Mustachio',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.mustachio.childImageSharp.fluid,
    },
    {
      name: 'Golden Ball',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.gball.childImageSharp.fluid,
    },
    {
      name: 'Stinger',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.stinger.childImageSharp.fluid,
    },
    {
      name: 'Subterranean King',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.sking.childImageSharp.fluid,
    },
    {
      name: `Speed-o'-Sound Sonic`,
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.sonic.childImageSharp.fluid,
    },
    {
      name: 'Metal Bat',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.mbat.childImageSharp.fluid,
    },
    {
      name: 'Awakened Mosquito Girl',
      type: HeroType.psychic,
      initialRank: HeroRank.elite,
      avatar: query.amg.childImageSharp.fluid,
    },
    {
      name: 'Groribas',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.groribas.childImageSharp.fluid,
    },
    {
      name: 'Sky King',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.skyking.childImageSharp.fluid,
    },
    {
      name: 'Konbu Infinity',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.konbu.childImageSharp.fluid,
    },
    {
      name: 'Vaccine Man',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.vman.childImageSharp.fluid,
    },
    {
      name: 'Mosquito Girl',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.mgirl.childImageSharp.fluid,
    },
    {
      name: 'Melzargard',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.melzar.childImageSharp.fluid,
    },
    {
      name: 'Geryuganshoop',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.gery.childImageSharp.fluid,
    },
    {
      name: 'Hellish Blizzard',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.blizzard.childImageSharp.fluid,
    },
    {
      name: 'Terrible Torrnado',
      type: HeroType.weapon,
      initialRank: HeroRank.elite,
      avatar: query.tornado.childImageSharp.fluid,
    },
    {
      name: 'G4',
      type: HeroType.hiTech,
      initialRank: HeroRank.elite,
      avatar: query.g4.childImageSharp.fluid,
    },
    {
      name: 'Fukegao',
      type: HeroType.hiTech,
      initialRank: HeroRank.elite,
      avatar: query.fuke.childImageSharp.fluid,
    },
    {
      name: 'Doctor Genus',
      type: HeroType.hiTech,
      initialRank: HeroRank.elite,
      avatar: query.genus.childImageSharp.fluid,
    },
    {
      name: 'Armored Gorilla',
      type: HeroType.hiTech,
      initialRank: HeroRank.elite,
      avatar: query.gorilla.childImageSharp.fluid,
    },
    {
      name: 'Blue Fire',
      type: HeroType.hiTech,
      initialRank: HeroRank.elite,
      avatar: query.bfire.childImageSharp.fluid,
    },
    {
      name: 'Genos',
      type: HeroType.hiTech,
      initialRank: HeroRank.elite,
      avatar: query.genos.childImageSharp.fluid,
    },
    {
      name: 'Metal Knight',
      type: HeroType.hiTech,
      initialRank: HeroRank.elite,
      avatar: query.mknight.childImageSharp.fluid,
    },
    {
      name: 'Child Emperorr',
      type: HeroType.hiTech,
      initialRank: HeroRank.elite,
      avatar: query.cemperor.childImageSharp.fluid,
    },
    {
      name: 'Heavy Tank Loincloth',
      type: HeroType.physical,
      initialRank: HeroRank.elite,
      avatar: query.htloin.childImageSharp.fluid,
    },
    {
      name: 'Lightning Max',
      type: HeroType.physical,
      initialRank: HeroRank.elite,
      avatar: query.max.childImageSharp.fluid,
    },
    {
      name: 'Beast King',
      type: HeroType.physical,
      initialRank: HeroRank.elite,
      avatar: query.bking.childImageSharp.fluid,
    },
    {
      name: 'Puri-puri Prisoner',
      type: HeroType.physical,
      initialRank: HeroRank.elite,
      avatar: query.puri.childImageSharp.fluid,
    },
    {
      name: 'Tank-top Master',
      type: HeroType.physical,
      initialRank: HeroRank.elite,
      avatar: query.ttmaster.childImageSharp.fluid,
    },
    {
      name: 'Handsom Kamen Amai Mask',
      type: HeroType.physical,
      initialRank: HeroRank.elite,
      avatar: query.amai.childImageSharp.fluid,
    },
    {
      name: 'Carnage Kabuto',
      type: HeroType.physical,
      initialRank: HeroRank.elite,
      avatar: query.kabuto.childImageSharp.fluid,
    },
    {
      name: 'Superalloy Blackluster',
      type: HeroType.physical,
      initialRank: HeroRank.elite,
      avatar: query.alloy.childImageSharp.fluid,
    },
    {
      name: 'Silverfang (Bang)',
      type: HeroType.physical,
      initialRank: HeroRank.elite,
      avatar: query.bang.childImageSharp.fluid,
    },
    {
      name: 'Atomic Samurai',
      type: HeroType.complete,
      initialRank: HeroRank.elite,
      avatar: null,
    },
    {
      name: 'Zombieman',
      type: HeroType.complete,
      initialRank: HeroRank.elite,
      avatar: null,
    },
    {
      name: 'Garou',
      type: HeroType.complete,
      initialRank: HeroRank.elite,
      avatar: query.garou.childImageSharp.fluid,
    },
    {
      name: 'King',
      type: HeroType.complete,
      initialRank: HeroRank.elite,
      avatar: null,
    },
    {
      name: 'Boros',
      type: HeroType.complete,
      initialRank: HeroRank.elite,
      avatar: null,
    },
  ];

  return heroes;
};

export default useHeroData;
