<script>
	import { onMount } from 'svelte';
	import anime from 'animejs';
	let wave_1_1 =
		'M148 106.209C99.018 95.1249 48.5 116.5 0 106.209V300.009L900 300V89C700 133.209 685.527 81.5 532 81.5C422 81.5 448.5 174.209 148 106.209Z';
	let wave1_2 =
		'M233.5 89.5C152 74.7266 82.5 126.5 0 106.709V300.509L900 300.5V89.5C800.5 150.5 732.451 71.8878 625.5 106.709C432 169.709 399 119.5 233.5 89.5Z';

	let wave_2_1 =
		'M0 299.443V177.63C105.2 187.333 139.5 169 272 128.5C386.333 93.553 525.686 219.893 666.852 185.663C783 157.5 866.402 218.589 900 212.22V300L0 299.443Z';
	let wave2_2 =
		'M0 299.443V177.63C53.5 189 101 106 220 137C350.697 171.047 353.5 216.22 515 162C621.578 126.219 866.402 218.589 900 212.22V300L0 299.443Z';

	let wave_3_1 =
		'M900 194.5C814 175.5 701.5 246.5 562.5 206.5C240.126 113.73 28.9999 200.5 -7.89628e-05 200.5L0 300H900V194.5Z';
	let wave3_2 =
		'M900 194.5C857.5 175 729 215.5 641 223.5C385.553 246.722 360 136.5 -0.000108346 200.5L0 300H900V194.5Z';

	onMount(() => {
		anime({
			targets: '#one',

			easing: 'easeInOutQuad',
			direction: 'alternate',
			loop: true,
			duration: 25000,
			d: [{ value: wave_1_1 }, { value: wave1_2 }]
		});
		anime({
			targets: '#two',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			loop: true,
			duration: 15000,
			d: [{ value: wave_2_1 }, { value: wave2_2 }]
		});
		anime({
			targets: '#thre',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			loop: true,
			duration: 7500,
			d: [{ value: wave_3_1 }, { value: wave3_2 }]
		});
	});
</script>

<div class="wave">
	<svg
		class=" bg-base-200 text-amber-900"
		id="visual"
		viewBox="0 0 900 300"
		width="100%"
		height="100%"

		preserveAspectRatio="xMidYMid none"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		version="1.1"
		><path
			id="one"
			d="M233.5 89.5C152 74.7266 82.5 126.5 0 106.709V300.509L900 300.5V89.5C800.5 150.5 732.451 71.8878 625.5 106.709C432 169.709 399 119.5 233.5 89.5Z"
			fill="#ffb86c"
		/>

		<path
			id="two"
			d="M0 299.443V177.63C53.5 189 101 106 220 137C350.697 171.047 353.5 216.22 515 162C621.578 126.219 866.402 218.589 900 212.22V300L0 299.443Z"
			fill="#cd7677"
		/>
		<path
			id="thre"
			d="M900 194.5C814 175.5 701.5 246.5 562.5 206.5C240.126 113.73 28.9999 200.5 -7.89628e-05 200.5L0 300H900V194.5Z"
			fill="#734e6a"
		/>
	</svg>
	<div dir="rtl" class="pb-20 bg-thre">
		<div class="lg:flex lg:justify-evenly">
			<article class="space-x-4 prose prose-invert pt-[75px] lg:pt-[50px] pr-5">
				<h2 class="lg:text-4xl text-3xl text-base-content">كيف بدأت أتعلم برمجة؟</h2>
				<p class="pt-[25px] text-base-content text-xl">
					بسم الله الرحمن الرحيم<br />
					والصلاة والسلام على أشرف الأنبياء والمرسلين سيدنا محمد وعلى أله وصحبة اجمعين بدات بعد تخرجي
					من الأبتدائية في الصيف سافرنا لسوريا سجلت في معهد في مسارات الحساب الذهني والأنجليزي والتصميم
					وبرمجة الألعاب
				</p>
				<br />

				<div />
			</article>
			<button
				class="lg:mt-[200px] btn btn-active btn-primary w-[100px] md:w-[120px] lg:w-[130px] xl:w-[150px] h-[50px] md:h-[60px] lg:h-[70px] xl:h-[80px] mr-8 mb-8
				text-base md:text-lg">من أنا؟</button
			>
			<!-- <button class="lg:mt-[280px] rounded-lg mr-8 mb-8 w-[100px] h-[50px] bg-gray-800 text-[#fff]">
				<a href="/من_أنا">من أنا؟</a>
			</button> -->
		</div>
	</div>
</div>

<style>
	.wave {
		position: relative;
	}
	.wave > svg {
		overflow: clip;
		position: relative;
		top: 0px;
		right: 0px;
		left: 0px;
		bottom: 0px;
		z-index: -1;
		aspect-ratio: 9/3;
		object-fit: cover;
	}
	#one {
		fill: var(--one);
	}

	#two {
		fill: var(--two);
	}

	#thre {
		fill: var(--thre);
	}
	#for {
		fill: var(--for);
	}
</style>
