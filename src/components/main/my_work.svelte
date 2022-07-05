<script>
	import { onMount } from 'svelte';
	import anime from 'animejs';

	let wave_1_1 =
		'M0 113L129 117L257 113L386 147L514 123L643 113L771 139L900 100L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z';
	let wave1_2 =
		'M0 112L129 134L257 152L386 167L514 149L643 168L771 100L900 174L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z';

	let wave_2_1 =
		'M0 123L129 114L257 111L386 66L514 87L643 121L771 116L900 66L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z';
	let wave2_2 =
		'M0 88L129 80L257 91L386 112L514 79L643 77L771 77L900 130L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z';

	let wave_3_1 =
		'M0 66L129 48L257 56L386 61L514 36L643 67L771 72L900 47L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z';
	let wave3_2 =
		'M0 65L129 39L257 70L386 37L514 54L643 61L771 60L900 73L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z';
	onMount(() => {
		anime({
			targets: '#two1',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			loop: true,
			d: [{ value: wave_1_1 }, { value: wave1_2 }],
			duration: 2500
		});
		anime({
			targets: '#thre1',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			loop: true,
			d: [{ value: wave_2_1 }, { value: wave2_2 }],
			duration: 2500
		});
		anime({
			targets: '#for1',
			easing: 'easeInOutQuad',
			direction: 'alternate',
			loop: true,
			d: [{ value: wave_3_1 }, { value: wave3_2 }],
			duration: 2500
		});
	});
</script>

<div>
	<div class="absolute w-[100%] ">
		<svg
			viewBox="0 0 900 300"
			width="100%"
			height="100%"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			version="1.1"
			><path
				class="fill-five"
				id="two1"
				d="M0 113L129 117L257 113L386 147L514 123L643 113L771 139L900 100L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z"
				fill="#3b354d"
			/><path
				class="fill-for"
				id="thre1"
				d="M0 123L129 114L257 111L386 66L514 87L643 121L771 116L900 66L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z"
				fill="#573d5f"
			/><path
				class="fill-thre"
				id="for1"
				d="M0 66L129 48L257 56L386 61L514 36L643 67L771 72L900 47L900 0L771 0L643 0L514 0L386 0L257 0L129 0L0 0Z"
				fill="#79436b"
			/></svg
		>
	</div>
    <div class="pb-36 bg-base-200 pt-[250px] lg:pt-[450px]">
		<div class="lg:flex lg:justify-evenly">
			<article class="ml-11 space-x-4 prose prose-invert pt-[75px] lg:pt-[50px] pl-5">
				<h2 class=" lg:text-5xl text-3xl text-base-content">عينات لذيذة</h2>
				<p class="text-right pt-[25px] text-base-content text-xl pr-10">
                    صنعت هذه النماذج لتكون مرجع لمهاراتي الحالية في البرمجة<br> رجاء تصفحها
				</p>
				<br />

				<div />
			</article>
			<button
				class="lg:mt-[170px] btn btn-active btn-primary w-[100px] md:w-[120px] lg:w-[130px] xl:w-[150px] h-[50px] md:h-[60px] lg:h-[70px] xl:h-[80px] ml-14 mb-8
				text-base md:text-lg ">تصفح العينات</button
			>
			<!-- <button class="lg:mt-[280px] rounded-lg mr-8 mb-8 w-[100px] h-[50px] bg-gray-800 text-[#fff]">
				<a href="/من_أنا">من أنا؟</a>
			</button> -->
		</div>
	</div>
</div>
