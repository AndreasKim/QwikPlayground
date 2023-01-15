import { component$, useStylesScoped$, useStore } from '@builder.io/qwik';
import styles from './navigation.css?inline';
import UserNavigation from './usernavigation';

export default component$(() => {
    useStylesScoped$(styles);
    const store = useStore({
        navClass: "d-none",
        logoAnim: "d-none"
    });
    return (
        <nav class={`site-header float-top ${store.navClass} d-lg-block`} window:onScroll$={() => {
            if (window.scrollY > 230)
                store.navClass = "fixed-top block"
            if (window.scrollY < 230)
                store.navClass = "d-none"
        }}>
            <div class="container">
                <div class="row clearfix">
                    <div class="col-md container d-flex flex-md-row justify-content-between">

                        <img class={`py-2 ${store.logoAnim} d-md-inline-block`} src="/logo-small.png" height="35x" window:onScroll$={() => {
                            if (window.scrollY > 230)
                                store.logoAnim = "animated jackInTheBox"
                            if (window.scrollY < 230)
                                store.logoAnim = "d-none"
                        }} />

                        <a class="py-2 d-none d-md-inline-block" href="#">Products</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">About</a>
                        <a class="py-2 d-none d-md-inline-block" href="#">Cart</a>

                    </div>
                    <div class=" col-md container d-flex flex-md-row-reverse justify-content-between" >
                        <div class="py-2 d-none d-md-inline-block">
                            <UserNavigation></UserNavigation>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
});

