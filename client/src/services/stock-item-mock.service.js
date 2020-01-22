import timer from '../util/timer';

export class StockItemMockService {
  async listStockItems() {
    // simulate time to GET data
    await timer(1000);

    return [
      {
        "name": "Yoki",
        "description": "woof",
        "stock": "1",
        "unitPrice": "priceless",
        "picture": "dog.jpeg",
        "manufacturer": "cute"
      },
      {
        "name": "Yoki",
        "description": "ark",
        "stock": "1",
        "unitPrice": "priceless",
        "picture": "arki.jpeg",
        "manufacturer": "kebukai"
      },
      {
        "name": "Yoki",
        "description": "good girl",
        "stock": "1",
        "unitPrice": "priceless",
        "picture": "pupper.jpeg",
        "manufacturer": "pretty"
      }
    ];
  }
}
