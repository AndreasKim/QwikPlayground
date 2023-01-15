import { component$, Slot, useClientEffect$, useSignal } from '@builder.io/qwik';
import { Carousel } from 'bootstrap';


export default component$(() => {
    const aRefNext = useSignal<Element>();
    const aRefPrev = useSignal<Element>();

    useClientEffect$(() => {
        const myCarouselElement = document.querySelector('#carouselExampleIndicators') ?? "";
        const carousel = new Carousel(myCarouselElement, {
            interval: 10000,
        });
        const next = (event: Event) => {
            event.preventDefault();
            carousel.next();
        };
        const prev = (event: Event) => {
            event.preventDefault();
            carousel.prev();
        };
        aRefNext.value!.addEventListener('click', next);
        aRefPrev.value!.addEventListener('click', prev);
        return () => { 
            aRefNext.value!.removeEventListener('click', next);
            aRefPrev.value!.removeEventListener('click', prev);
        };
    });

    return (
        <div class="justify-content-center mb-4">
            <div id="carouselExampleIndicators"
                class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <Slot />
                </div>
                <a id="carouselExampleIndicators-prev"
                    ref={aRefPrev}
                    class="carousel-control-prev" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a id="carouselExampleIndicators-next"
                    ref={aRefNext}
                    class="carousel-control-next" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
});
