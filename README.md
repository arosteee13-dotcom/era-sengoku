# era-sengoku

A browser-based RPG set in feudal Japan.

## Currency System

The game uses a Tokugawa-inspired three-tier currency system based on the Edo period monetary structure.

### Currency Tiers

| Currency | Material | Symbol | Value in Mon |
|----------|----------|--------|-------------|
| Ryō      | Gold     | 両     | 4000 Mon    |
| Bu       | Silver   | 分     | 1000 Mon    |
| Mon      | Copper   | 文     | 1 Mon       |

### Conversion Rates

- 1 Ryō = 4 Bu
- 1 Bu = 1000 Mon
- 1 Ryō = 4000 Mon

### Gameplay Usage

- **Mon (copper)** — day-to-day currency for Kenji and common villagers. Used for food, lodging, and basic goods from merchants. Example: a silk roll costs 10 Mon.
- **Bu (silver)** — mid-tier currency for larger trades and equipment. Used by merchants and mid-rank samurai.
- **Ryō (gold)** — high-value currency for major transactions, rare equipment, and rewards. Typically held by nobility, high-rank samurai, and wealthy merchants.

### Configuration

Currency conversions and helpers are centralized in [`data/economy/currency.js`](data/economy/currency.js), with reference values in [`data/economy/currency.json`](data/economy/currency.json).