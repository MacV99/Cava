const productos = [
    {
        id: 1,
        nombre: "Parafarfait (parfait)",
        precio: 15.0,
        descripcion:
            "Yogurt griego natural, granola orgánica, mermelada de arándanos y trozos de fruta.",
        img: "img/Products/otros/parafarfait.jpg",
        categoria: "otros",
    },
    {
        id: 2,
        nombre: "Combo Infaltable",
        precio: 58.0,
        descripcion:
            "Yogurt griego 500ml, Mantequilla Ghee 200gr , Arequipe de almendras 260gr",
        img: "img/Products/combos/combo-infaltable.jpg",
        categoria: "combo",
    },
    {
        id: 3,
        nombre: "FRUTOS ROJOS",
        precio: 20.0,
        descripcion:
            "Yogurt natural, 100% artesanal libre de químicos, conservantes y preservantes aporta gran beneficio a la salud y nutrición. Con trozos de FRUTOS ROJOS y textura muy cremosa.",
        img: "img/Products/yogurt/frutos_rojos.jpg",
        categoria: "yogurt",
    },
    {
        id: 4,
        nombre: "PIÑA",
        precio: 20.0,
        descripcion:
            "Yogurt natural, 100% artesanal libre de químicos, conservantes y preservantes aporta gran beneficio a la salud y nutrición. Con trozos de PIÑA y textura muy cremosa.",
        img: "img/Products/yogurt/pina.jpg",
        categoria: "yogurt",
    },
    {
        id: 5,
        nombre: "DURAZNO",
        precio: 20.0,
        descripcion:
            "Yogurt natural, 100% artesanal libre de químicos, conservantes y preservantes aporta gran beneficio a la salud y nutrición. Con trozos de DURAZNO y textura muy cremosa.",
        img: "img/Products/yogurt/durazno.jpg",
        categoria: "yogurt",
    },
    {
        id: 6,
        nombre: "CAFÉ",
        precio: 20.0,
        descripcion:
            "Yogurt natural, 100% artesanal libre de químicos, conservantes y preservantes aporta gran beneficio a la salud y nutrición. Con trozos de CAFÉ y textura muy cremosa.",
        img: "img/Products/yogurt/cafe.jpg",
        categoria: "yogurt",
    },
    {
        id: 7,
        nombre: "ARÁNDANOS",
        precio: 20.0,
        descripcion:
            "Yogurt natural, 100% artesanal libre de químicos, conservantes y preservantes aporta gran beneficio a la salud y nutrición. Con trozos de arándanos y textura muy cremosa.",
        img: "img/Products/yogurt/arandanos.jpg",
        categoria: "yogurt",
    },
    {
        id: 8,
        nombre: "FRESA",
        precio: 20.0,
        descripcion:
            "Yogurt natural, 100% artesanal libre de químicos, conservantes y preservantes aporta gran beneficio a la salud y nutrición. Con trozos de fresa y textura muy cremosa.",
        img: "img/Products/yogurt/fresa.jpg",
        categoria: "yogurt",
    },
    {
        id: 9,
        nombre: "KIWI",
        precio: 19.0,
        descripcion:
            "Yogurt natural, 100% artesanal libre de químicos, conservantes y preservantes aporta gran beneficio a la salud y nutrición. Con trozos de KIWI y textura muy cremosa.",
        img: "img/Products/yogurt/kiwi.jpg",
        categoria: "yogurt",
    },
    {
        id: 10,
        nombre: "NATURAL",
        precio: 20.0,
        descripcion:
            "Yogurt natural, 100% artesanal libre de químicos, conservantes y preservantes aporta gran beneficio a la salud y nutrición. Sin trozos de fruta y textura muy cremosa.",
        img: "img/Products/yogurt/kumis.jpg",
        categoria: "yogurt",
    },
    {
        id: 11,
        nombre: "COMBO LOVERS",
        precio: 85.0,
        descripcion:
            "Yogurt griego natural 1lt + Postre saludable 220ml + Mantequilla Ghee 200gr + Arequipe de almendras 260gr",
        img: "img/Products/combos/combo-lovers.jpg",
        categoria: "combo",
    },
    {
        id: 12,
        nombre: "COMBO PARA TU RUTINA",
        precio: 70.0,
        descripcion:
            "Yogurt griego natural 500ml + Postre saludable 220ml + Mantequilla Ghee 200gr + Arequipe de almendras 260gr",
        img: "img/Products/combos/combo-para-tu-rutina.jpg",
        categoria: "combo",
    },
    {
        id: 13,
        nombre: "POSTRE GRIEGO",
        precio: 15.0,
        descripcion:
            "Postre greigo saludable con arequipe de almendras, torta de avena con nueces y yogurt griego natural, es la perfecta combinación entre lo rico y saludable.",
        img: "img/Products/yogurt/pina.jpg",
        categoria: "otros",
    },

    {
        id: 15,
        nombre: "MERIENDA DIVERTIDA",
        precio: 14.0,
        descripcion:
            "1 Yogurt frutal en presentación de 400ml + 1 galleta de avena con chips de chocolate",
        img: "img/Products/combos/combo-merienda-divertida.jpg",
        categoria: "combo",
    },
    {
        id: 16,
        nombre: "DISFRUTA MAS Y AHORRA MAS",
        precio: 85.0,
        descripcion:
            "4 litros de yogurt griego, consumibles durante mes y medio, solicitalos en las fechas y días que prefieras",
        img: "img/Products/combos/combo-disfruta.jpg",
        categoria: "combo",
    },
    {
        id: 17,
        nombre: "AREQUIPE DE ALMENDRAS",
        precio: 20.0,
        descripcion:
            "Arequipe de almendras endulzado con miel de agave, libre de lácteos, producto apto para diabeticos y veganos.",
        img: "img/Products/otros/arequipe-almendras.jpg",
        categoria: "otros",
    },
    {
        id: 18,
        nombre: "MANTEQUILLA GHEE",
        precio: 25.0,
        descripcion: "Mantequilla Ghee",
        img: "img/Products/otros/ghee.jpg",
        categoria: "otros",
    },
    {
        id: 19,
        nombre: "YOGURT GRIEGO (220 ML)",
        precio: 25.0,
        descripcion:
            "Yogurt griego, 100% natural libre de químicos, conservantes y preservantes. Te aporta más de 9gr de proteína por porción y un gran beneficio para la flora intestinal además sin azúcar añadida.",
        img: "img/Products/griego/griego(220ml).jpg",
        categoria: "griego",
    },
    {
        id: 20,
        nombre: "YOGURT GRIEGO (500 ML)",
        precio: 18.0,
        descripcion:
            "Yogurt griego, 100% natural libre de químicos, conservantes y preservantes. Te aporta más de 9gr de proteína por porción y un gran beneficio para la flora intestinal además sin azúcar añadida.",
        img: "img/Products/griego/griego(500ml).jpg",
        categoria: "griego",
    },
    {
        id: 21,
        nombre: "YOGURT GRIEGO (1L)",
        precio: 33.0,
        descripcion:
            "Yogurt griego, 100% natural libre de químicos, conservantes y preservantes. Te aporta más de 9gr de proteína por porción y un gran beneficio para la flora intestinal además sin azúcar añadida.",
        img: "img/Products/griego/griego(1l).jpg",
        categoria: "griego",
    },
    {
        id: 22,
        nombre: "YOGURT GRIEGO (4L)",
        precio: 25.0,
        descripcion:
            "Yogurt griego, 100% natural libre de químicos, conservantes y preservantes. Te aporta más de 9gr de proteína por porción y un gran beneficio para la flora intestinal además sin azúcar añadida.",
        img: "img/Products/griego/griego(4l).jpg",
        categoria: "griego",
    },
];
