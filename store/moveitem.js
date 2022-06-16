export const state = () => ({
	moveitem: []
})

export const getters = {

}

export const actions = {
	async getMoveItems({commit}){
		// const content = await axios.post('link');
		const content =  [
			{
				compound: ["ВИКПБ+ГК-172 : ЛУЧ.059.00.00.00-01 - 21617004"],
				departure_date: "2022/05/05",
				from: "ООО НПП ГА \"Луч\"",
				to: "ПАО \"Сургутнефтегаз\" УБР-1",
				transfer_date: "2022/05/06",
				commentary: ".",
				status: "Доставлен"
			},
			{ // TODO: id name href
				compound: [


					'\"ВИКПБ-102 : ЛУЧ.609.00.00.00 - 21487002\"'
					,

					'\"ВИКПБ-102 : ЛУЧ.609.00.00.00 - 21487001\"'
					,

					'\"Законцовка : ЛУЧ.593.20.00.00 - 22446033\"'
					,

					'\"МП : ЛУЧ.598.00.00.00 - 21418160\"'
					,

					'\"МП : ЛУЧ.598.00.00.00 - 21418161\"'
					,

					'\"МП : ЛУЧ.598.00.00.00 - 21418162\"'
					,

					'\"МП : ЛУЧ.598.00.00.00 - 21418159\"'
					,

					'\"МПИ : ЛУЧ.602.00.00.00 - 21447084\"'
					,

					'\"МПИ : ЛУЧ.602.00.00.00 - 21447085\"'
					,

					'\"МУП : ЛУЧ.646.00.00.00 - 22490002\"'
					,

					'\"МУП : ЛУЧ.646.00.00.00 - 22490001\"'
					,

					'\"Пульсатор : ЛУЧ.645.03.00.00 - 22368002\"'
					,

					'\"Пульсатор : ЛУЧ.645.03.00.00 - 22368001\"'
					,

					'\"Рестриктор : ЛУЧ.546.23.00.00 - 22419002\"'
					,

					'\"Соединитель телескопический : ЛУЧ.591.00.00.00 - 22387058\"'
					,

					'\"Соединитель телескопический : ЛУЧ.591.00.00.00 - 22387059\"'
					,

					'\"Труба ТБТН : ЛУЧ.645.01.00.00 - 83958\",'

				],
				departure_date: "2022/04/12",
				from: "ООО НПП ГА \"Луч\"",
				to: "ПАО «Сургутнефтегаз» УКРС и ПНП",
				transfer_date: "2022/04/12",
				commentary: ".",
				status: "Доставлен"
			},
			{
				compound: ["МПИ : ЛУЧ.602.00.00.00 - 17447005"],
				departure_date: "2021/12/13",
				from: "ООО \"ОРИОН\"",
				to: "ООО НПП ГА \"Луч\"",
				transfer_date: "",
				commentary: "МПИ 17447005 поступил на БПО 10.12.2021г. - Партия 5-Куст 547 Общее время циркуляции: 878,85 ч. В результате проведения входного контроля установлено: Сломана шпилька крепежа верхнего стыковочного узла и шасси, из-за высоких вибраций в процессе работы в скважине. Заключение: Требуется ремонт на заводе изготовителе ООО НПП ГА \"ЛУЧ\".",
				status: "В пути"
			},
		]
		commit('addMoveItems', content)
	}
}

export const mutations = {
	addMoveItems(state, content){
		state.moveitem = content
	}
}
