<script>
	import { onMount } from 'svelte';
	import anime from 'animejs';

	onMount(() => {

    //النجوم
		anime({
			targets: '.star',
			translateX: function (el) {
				return el.getAttribute('data-x');
			},
			translateY: function (el, i) {
                switch (i) {
                    case 0:
                        return -400;
                    case 1:
                        return -420;
                    case 2:
                        return -400;
                    default:
                        return i;
                }
			},
			scale: function (el, i, l) {
                switch (i) {
                    case 0:
                        return 1;
                    case 1:
                        return 2;
                    case 2:
                        return 1;
                    default:
                        return i;
                }
				return l - i + 0.25;
			},
			rotate: function () {
                
				return anime.random(-360, 360);
			},
			borderRadius: function () {
				return ['50%', anime.random(10, 35) + '%'];
			},
			duration: function () {
				return anime.random(1200, 1800);
			},
			delay: function () {
				return 1000;
			},
			direction: 'alternate',
			loop: false
		});


        //اليد
        anime({
			targets: '#hand',

			rotate: -20,
            easing: 'easeInOutQuad',
			// duration: function () {
			// 	return anime.random(1200, 1800);
			// },

			direction: 'alternate',
			loop: true
		});
	});
</script>
<div id="main_head" class=" hero bg-base-200 min-h-[650px] md:pt-32 lg:pt-52 xl:pt-72 content-center">
	<div class="hero-content text-center">
		<div class="">
            <div class="flex text-6xl md:text-6xl lg:text-7xl xl:text-9xl whitespace-nowrap">
                <h1 class=" font-bold " id="hand">👋</h1>
                <h1 class=" font-bold"> مرحبا بكم</h1>
            </div>

			<p class=" md:text-2xl lg:text-3xl py-8 lg:py-16">.لأول أختبار حقيقي لقدراتي في البرمجة</p>
		</div>
	</div>

	<div class=" flex mt-[350px] gap-3">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="star h-[50px] w-[50px]"
			data-x="-90"
			data-y="130"
			size="100"
			rotate="50"
			duration="1200"
			delay="0"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
			/>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="star h-[50px] w-[50px]"
			data-x="0"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
			/>
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="star h-[50px] w-[50px] "
			data-x="70"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
			/>
		</svg>
	</div>
</div>
