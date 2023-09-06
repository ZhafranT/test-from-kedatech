export const navLinks = [
   {
      id: "about",
      title: "About",
   },
   {
      id: "pricing",
      title: "Pricing",
   },
   {
      id: "contact",
      title: "Contact",
   },
];


export const pricingPlan = [
   {
      id: "tier-1",
      price: 200,
      rp: "000",
      currency: "IDR",
      frequency: "/month",
      title: "Basic",
      desc: "For Basic Subs",
      contents: [
         "a.Mencatat barang masuk",
         "b.Mencatat barang keluar",
         "c.Mencatat hasil keuntungan",
      ],
      mostPopular: false,
   },
   {
      id: "tier-2",
      price: 600,
      rp: "000",
      currency: "IDR",
      frequency: "/month",
      title: "Business",
      desc: "For Business Subs",
      contents: [
         "a.Mencatat barang masuk dan keluar",
         "b.Mencatat Keuntungan",
         "c.Dapat menganalisa hasil penjualan dengan CHART",
         "d.Support 7x24 Jam",
      ],
      mostPopular: true,
   },
   {
      id: "tier-3",
      price: 900,
      rp: "000",
      currency: "IDR",
      frequency: "/month",
      title: "Entrepreneur",
      desc: "for Entrepreneur Subs",
      contents:
         [
            "a.Mencatat barang masuk dan keluar",
            "b.Mencatat Keuntungan",
            "c.Dapat menganalisa hasil penjualan dengan CHART",
            "d.Support 7x24 Jam",
            "e.Export data ke Excel",
            "f.AI Prediksi penghasilan",
         ],
      mostPopular: false,
   },
];