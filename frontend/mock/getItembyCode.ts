export default {
  'GET /api/Item/code/:code': (req: any, res: any) => {
    const { code } = req.params;

    const items = [
      {
        id: 5,
        name: 'SEALED EDGE EYE PAD',
        description: 'description of SEALED EDGE EYE PAD',
        img: 'https://s2.loli.net/2024/12/03/NVk1oX9gIfqpuPb.jpg',
        defaultUnitId: 4,
        units: [
          {
            id: 4,
            name: 'pack',
            barcode: '9310088010787',
            qrcode: 'QR_SEALED_PACK',
            img: 'https://s2.loli.net/2024/12/03/NVk1oX9gIfqpuPb.jpg',
          },
          {
            id: 5,
            name: 'drop',
            barcode: '9310088010787',
            qrcode: 'QR_SEALED_DROP',
            img: 'https://s2.loli.net/2024/12/03/NVk1oX9gIfqpuPb.jpg',
          },
        ],
      },
      {
        id: 6,
        name: 'PAD',
        description: 'description of PAD',
        img: 'https://s2.loli.net/2024/12/03/NVk1oX9gIfqpuPb.jpg',
        defaultUnitId: 6,
        units: [
          {
            id: 4,
            name: 'pack',
            barcode: '6902222222221',
            qrcode: 'QR_PAD_PACA',
            img: 'https://s2.loli.net/2024/12/03/NVk1oX9gIfqpuPb.jpg',
          },
          {
            id: 6,
            name: 'box',
            barcode: 'https://5084144.scnnr.co',
            qrcode: 'QR_PAD_BOX',
            img: 'https://s2.loli.net/2024/12/03/NVk1oX9gIfqpuPb.jpg',
          },
        ],
      },
      {
        id: 7,
        name: 'EYE',
        description: 'description of EYE',
        img: 'https://s2.loli.net/2024/12/03/NVk1oX9gIfqpuPb.jpg',
        defaultUnitId: 4,
        units: [
          {
            id: 4,
            name: 'pack',
            barcode: '6903333333333',
            qrcode: 'https://5084144.scnnr.co',
            img: 'https://s2.loli.net/2024/12/03/NVk1oX9gIfqpuPb.jpg',
          },
        ],
      },
    ];

    // 查找所有匹配该 code 的 unit
    const matched = items
      .map((item) => {
        const matchedUnits = item.units.filter((u) => u.barcode === code || u.qrcode === code);
        if (matchedUnits.length > 0) {
          return {
            ...item,
            units: matchedUnits,
          };
        }
        return null;
      })
      .filter(Boolean);
      console.log('matched', matched);

    if (matched.length > 0) {
      res.send({
        success: true,
        data: matched,
        message: 'Matched item(s) by barcode or QR code',
      });
    } else {
      res.send({
        success: false,
        data: [],
        message: 'No matching units found for the code',
      });
    }
  },
};
