import { prisma } from "./prisma_cleint";


async function up() {
    await prisma.upgrade.createMany({
        data:
        [
            {
              "id": 1,
              "name": "Двигатель",
              "description": "Улучшенный двигатель, повышающий мощность и скорость автомобиля.",
              "img": ""
            },
            {
              "id": 2,
              "name": "Трансмиссия",
              "description": "Мощная трансмиссия, обеспечивающая плавное переключение передач.",
              "img": ""
            },
            {
              "id": 3,
              "name": "Колеса",
              "description": "Широкие шины с высоким сцеплением, улучшающие устойчивость и управляемость.",
              "img": ""
            },
            {
              "id": 4,
              "name": "Подвеска",
              "description": "Улучшенная подвеска, обеспечивающая комфортную езду и плавное движение по неровной дороге.",
              "img": ""
            },
            {
              "id": 5,
              "name": "Турбокомпрессор",
              "description": "Турбонаддув, повышающий мощность и ускорение автомобиля.",
              "img": ""
            },
            {
              "id": 6,
              "name": "Выхлопная система",
              "description": "Спортивная выхлопная система, улучшающая звук двигателя и повышающая мощность.",
              "img": ""
            },
            {
              "id": 7,
              "name": "Тормозная система",
              "description": "Улучшенная тормозная система, обеспечивающая более быстрое и эффективное торможение.",
              "img": ""
            },
            {
              "id": 8,
              "name": "Кузов",
              "description": "Улучшенная аэродинамика, снижающая сопротивление воздуха и повышающая скорость.",
              "img": ""
            },
            {
              "id": 9,
              "name": "Салон",
              "description": "Комфортабельные сидения, дополнительная звукоизоляция, улучшенная вентиляция.",
              "img": ""
            },
            {
              "id": 10,
              "name": "Система на вида GPS",
              "description": "Навигационная система, оснащенная картой и функцией отслеживания трафика.",
              "img": ""
            },
            {
              "id": 11,
              "name": "Спортивный руль",
              "description": "Улучшенный руль с более четким откликом и удобной хваткой.",
              "img": ""
            },
            {
              "id": 12,
              "name": "Система антиблокировки тормозов (ABS)",
              "description": "Предотвращает блокировку колес при торможении, улучшает управляемость и безопасность.",
              "img": ""
            },
            {
              "id": 13,
              "name": "Система стабилизации (ESP)",
              "description": "Помогает удерживать автомобиль на траектории при резком маневре, повышает безопасность.",
              "img": ""
            },
            {
              "id": 14,
              "name": "Система контроля тяги (TCS)",
              "description": "Предотвращает пробуксовку колес при старте и ускорении, улучшает динамику.",
              "img": ""
            },
            {
              "id": 15,
              "name": "Система помощи при парковке",
              "description": "Система с камерами и датчиками, облегчающая процесс парковки.",
              "img": ""
            },
            {
              "id": 16,
              "name": "Сиденья с подогревом и вентиляцией",
              "description": "Комфорт и удобство в любое время года.",
              "img": ""
            },
            {
              "id": 17,
              "name": "Датчик дождя",
              "description": "Автоматически включает дворники при начинающемся дожде.",
              "img": ""
            },
            {
              "id": 18,
              "name": "Датчик света",
              "description": "Автоматически включает фары при наступающей темноте.",
              "img": ""
            },
            {
              "id": 19,
              "name": "Система беспроводной зарядки",
              "description": "Удобная зарядка смартфона без проводов.",
              "img": ""
            },
            {
              "id": 20,
              "name": "Панорамная крыша",
              "description": "",
              "img": ""
            }
          ]
            
        
})

await prisma.upgradeLevelCost.createMany({data:[{"id":1,"upgradeId":1,"level":1,"cost":100,"coinPerHour":40},{"id":2,"upgradeId":1,"level":2,"cost":441,"coinPerHour":68},{"id":3,"upgradeId":1,"level":3,"cost":926,"coinPerHour":88},{"id":4,"upgradeId":1,"level":4,"cost":1945,"coinPerHour":114},{"id":5,"upgradeId":1,"level":5,"cost":4084,"coinPerHour":148},{"id":6,"upgradeId":1,"level":6,"cost":8576,"coinPerHour":193},{"id":7,"upgradeId":1,"level":7,"cost":18010,"coinPerHour":250},{"id":8,"upgradeId":1,"level":8,"cost":37823,"coinPerHour":326},{"id":9,"upgradeId":1,"level":9,"cost":79428,"coinPerHour":424},{"id":10,"upgradeId":1,"level":10,"cost":166799,"coinPerHour":551},{"id":12,"upgradeId":2,"level":10,"cost":198643,"coinPerHour":590},{"id":13,"upgradeId":2,"level":9,"cost":146230,"coinPerHour":468},{"id":14,"upgradeId":2,"level":8,"cost":12974,"coinPerHour":356},{"id":15,"upgradeId":2,"level":7,"cost":104367,"coinPerHour":279},{"id":16,"upgradeId":2,"level":6,"cost":54872,"coinPerHour":215},{"id":17,"upgradeId":2,"level":5,"cost":10274,"coinPerHour":160},{"id":18,"upgradeId":2,"level":4,"cost":5000,"coinPerHour":123},{"id":19,"upgradeId":2,"level":3,"cost":1500,"coinPerHour":102},{"id":20,"upgradeId":2,"level":2,"cost":640,"coinPerHour":84},{"id":21,"upgradeId":2,"level":1,"cost":250,"coinPerHour":60},{"id":22,"upgradeId":3,"level":10,"cost":250000,"coinPerHour":0},{"id":23,"upgradeId":3,"level":9,"cost":225000,"coinPerHour":0},{"id":24,"upgradeId":3,"level":8,"cost":200000,"coinPerHour":0},{"id":25,"upgradeId":3,"level":7,"cost":150000,"coinPerHour":0},{"id":26,"upgradeId":3,"level":6,"cost":100000,"coinPerHour":0},{"id":27,"upgradeId":3,"level":5,"cost":50000,"coinPerHour":0},{"id":28,"upgradeId":3,"level":4,"cost":25000,"coinPerHour":0},{"id":29,"upgradeId":3,"level":3,"cost":10000,"coinPerHour":0},{"id":30,"upgradeId":3,"level":2,"cost":5000,"coinPerHour":0},{"id":31,"upgradeId":3,"level":1,"cost":1000,"coinPerHour":0},{"id":32,"upgradeId":4,"level":10,"cost":1000000,"coinPerHour":0},{"id":33,"upgradeId":4,"level":9,"cost":900000,"coinPerHour":0},{"id":34,"upgradeId":4,"level":8,"cost":750000,"coinPerHour":0},{"id":35,"upgradeId":4,"level":7,"cost":500000,"coinPerHour":0},{"id":36,"upgradeId":4,"level":6,"cost":250000,"coinPerHour":0},{"id":37,"upgradeId":4,"level":5,"cost":100000,"coinPerHour":0},{"id":38,"upgradeId":4,"level":4,"cost":50000,"coinPerHour":0},{"id":39,"upgradeId":4,"level":3,"cost":25000,"coinPerHour":0},{"id":40,"upgradeId":4,"level":2,"cost":10000,"coinPerHour":0},{"id":41,"upgradeId":4,"level":1,"cost":5000,"coinPerHour":0},{"id":42,"upgradeId":5,"level":10,"cost":0,"coinPerHour":0},{"id":43,"upgradeId":5,"level":9,"cost":5451200,"coinPerHour":0},{"id":44,"upgradeId":5,"level":8,"cost":2288000,"coinPerHour":0},{"id":45,"upgradeId":5,"level":7,"cost":960000,"coinPerHour":0},{"id":46,"upgradeId":5,"level":6,"cost":404099,"coinPerHour":0},{"id":47,"upgradeId":5,"level":5,"cost":169208,"coinPerHour":0},{"id":48,"upgradeId":5,"level":4,"cost":70920,"coinPerHour":0},{"id":49,"upgradeId":5,"level":3,"cost":29650,"coinPerHour":0},{"id":50,"upgradeId":5,"level":2,"cost":12421,"coinPerHour":0},{"id":51,"upgradeId":5,"level":1,"cost":5210,"coinPerHour":0},{"id":52,"upgradeId":6,"level":10,"cost":7300792,"coinPerHour":0},{"id":53,"upgradeId":6,"level":9,"cost":3069496,"coinPerHour":0},{"id":54,"upgradeId":6,"level":8,"cost":1290624,"coinPerHour":0},{"id":55,"upgradeId":6,"level":7,"cost":542736,"coinPerHour":0},{"id":56,"upgradeId":6,"level":6,"cost":228144,"coinPerHour":0},{"id":57,"upgradeId":6,"level":5,"cost":96060,"coinPerHour":0},{"id":58,"upgradeId":6,"level":4,"cost":40440,"coinPerHour":0},{"id":59,"upgradeId":6,"level":3,"cost":17016,"coinPerHour":0},{"id":60,"upgradeId":6,"level":2,"cost":7140,"coinPerHour":0},{"id":61,"upgradeId":6,"level":1,"cost":3000,"coinPerHour":0},{"id":62,"upgradeId":7,"level":10,"cost":1240356,"coinPerHour":0},{"id":63,"upgradeId":7,"level":9,"cost":543215,"coinPerHour":0},{"id":64,"upgradeId":7,"level":8,"cost":147953,"coinPerHour":0},{"id":65,"upgradeId":7,"level":7,"cost":564321,"coinPerHour":0},{"id":66,"upgradeId":7,"level":6,"cost":2145463,"coinPerHour":0},{"id":67,"upgradeId":7,"level":5,"cost":110854,"coinPerHour":0},{"id":68,"upgradeId":7,"level":4,"cost":53612,"coinPerHour":0},{"id":69,"upgradeId":7,"level":3,"cost":21340,"coinPerHour":0},{"id":70,"upgradeId":7,"level":2,"cost":7251,"coinPerHour":0},{"id":71,"upgradeId":7,"level":1,"cost":3521,"coinPerHour":0}]})
}



async function main() {
    try{
        await up();
    }catch(e){
        console.log(e)
    }
    
}