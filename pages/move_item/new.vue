<template>
	<div>

		<main class="container">

			<ModalWindow :modal-name="'трансфер'" v-show="showModal"  :on-click-save="save" :on-click-save-and-push="submit"/>

			<section id="pageName">
				<PageNameH1 :page-name="pageName" />
			</section>

			<section class="BlueButtonContainer">
				<ButtonBlue :onClick="back" class="BlueButton">Назад</ButtonBlue>
			</section>

			<section class="form table-responsive">

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Отправляемые элементы : </span>

					<!--						<label class="typo__label">Tagging</label>-->
					<multiselect
						class="form-control"
						v-model="value"
						tag-placeholder="Добавить новый тег"
						placeholder="Поиск..."
						label="name"
						track-by="id"

						:options="options"
						:multiple="true" >

					</multiselect>
					<!--						<pre class="language-json"><code>{{ value  }}</code></pre>-->

				</div>

				<div class="input-group element">
					<span class="input-group-text" id="inputGroup-sizing-default">Откуда : </span>
					<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>

				<div class="input-group element ">
					<span class="input-group-text" id="inputGroup-sizing-default">Куда : </span>
					<input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
				</div>

				<div class="input-group  element">
					<span class="input-group-text comment" id="inputGroup-sizing-default">Комментарий : </span>
<!--					<textarea id="startDate" class="form-control" type="text" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">-->

<!--					</textarea>-->
					<TextEditor class="form-control" id="startDate" />
				</div>

				<div class="input-group element  date">
					<span class="input-group-text" id="inputGroup-sizing-default">Дата отправления : </span>
					<input id="startDate" class="form-control" type="date" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>

				<div class="input-group element  date">
					<span class="input-group-text" id="inputGroup-sizing-default">Дата получения : </span>
					<input id="endDate" class="form-control" type="date" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
				</div>

				<ButtonBlue :onClick="showModalFunction" class="BlueButton"  data-bs-toggle="modal" data-bs-target="#exampleModal">Добавить</ButtonBlue>
			</section>
		</main>

	</div>
</template>

<script>

// eslint-disable-next-line import/no-named-as-default
import Multiselect from 'vue-multiselect'
import PageNameH1 from '~/components/UI/PageNameH1.vue'
import ButtonBlue from '~/components/UI/ButtonBlue'


// UI

import TextEditor from "~/components/UI/TextEditor";
import ModalWindow from "~/components/UI/ModalWindow";



export default {
	name: "NewTransfer",
	components: { PageNameH1, ButtonBlue, Multiselect,TextEditor,ModalWindow},
	data(){
		return{
			pageName: 'Новый трансфер',

			showModal: false,

			// Multiselect

			value: [
				// { name: 'Javascript', code: 'js' }
			],
			options: [
				{ name: '2.4 Сцинтиблок : ЛУЧ.602.01.02.00 - TH7345 154-09.19', id: 1 },
				{ name: 'Адаптер USB-4UART : ОКР.057.00.02.00 - 22-51-2', id: 2 },
				{ name: 'Адаптер USB-BLE5-BT52 : ЛУЧ.950.00.04.00 - 21-371-2', id: 3 }
			]
		}
	},

	computed: {
	},


	methods: {
		back() {
			this.$router.push("/move_item")
		},

		showModalFunction(){
			this.showModal = !this.showModal

		},
		submit(){
			console.log("Добавлен трансфер")
			this.showModal = !this.showModal
			location.reload()
		},
		save(){
			console.log("Трансфер сохранен")
			this.showModal = !this.showModal
		}
	},
}
</script>

<style lang="css" scoped>
.comment{
}

.input-group{
	min-width: 585px;
}

.BlueButtonContainer{
	width: 97%;
	display: inline-flex;
	justify-content: flex-end;
}

.BlueButton{
	align-self: flex-end;
}

.modal{
	z-index: 9999;
}

.form{
	border: 2px solid rgba(72, 71, 71, 0.24);
	padding: 50px;
	margin: 10px;
}


@media screen and (min-width: 1000px){
	.date{
		width: 26%;
	}
}

@media screen and (max-width: 999px){
	#startDate{min-width: 585px;}
	#endDate{min-width: 585px;}
}

.element{
	margin-bottom: 1.5em

}
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css" ></style>

<style lang="scss">
@import "~static/assets/global.scss";
.multiselect__tag {
	position: relative;
	display: inline-block;
	padding: 4px 26px 4px 10px;
	border-radius: 5px;
	margin-right: 10px;
	color: #fff;
	line-height: 1;
	background: $main-blue;
	margin-bottom: 5px;
	white-space: nowrap;
	overflow: hidden;
	max-width: 100%;
	text-overflow: ellipsis;
}

.multiselect__option--highlight {
	background: $main-blue;
	outline: none;
	color: #fff;
}

.multiselect__tag-icon:after {
	content: "\D7";
	color: #000;
	font-size: 14px;

	&:hover{
		border-top-color:$main-blue;
	}
}

.multiselect__tags {
	border: 0px solid #e8e8e8;
}

.multiselect__tag-icon:hover {
background-color: $main-blue
}


</style>
