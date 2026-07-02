# era-sengoku

A browser-based RPG set in feudal Japan.

## Currency System

The game uses a Tokugawa-inspired three-tier currency system based on the Edo period monetary structure.

### Currency Tiers

| Currency | Material | Symbol | Value in Mon |
|----------|----------|--------|-------------|
| Ryo      | Gold     | 両     | 10000 Mon   |
| Shu      | Silver   | 朱     | 100 Mon     |
| Mon      | Copper   | 文     | 1 Mon       |

### Conversion Rates

- 1 Shu = 100 Mon
- 1 Ryo = 100 Shu
- 1 Ryo = 10000 Mon

### Gameplay Usage

- **Mon (copper)** — day-to-day currency for Kenji and common villagers. Used for food, lodging, and basic goods from merchants.
- **Shu (silver)** — mid-tier currency for larger trades and equipment. Used by merchants and mid-rank samurai.
- **Ryo (gold)** — high-value currency for major transactions, rare equipment, and rewards. Typically held by nobility, high-rank samurai, and wealthy merchants.

### Configuration

Currency conversions and helpers are centralized in [`data/economy/currency.js`](data/economy/currency.js), with reference values in [`data/economy/currency.json`](data/economy/currency.json).