import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import Navigation from '../navigation/navigation';

export default component$(() => {
    useStylesScoped$(styles);

    return (
        <header>
            <div class="navigationBanner" style="height:230px">
                <div class="container">
                   
                        <div class="float-md-left mt-4 pt-3 ml-3">
                            <div class="d-flex flex-column">
                                <div> <a href="~/"><img src="/logo2.png" asp-append-version="true" /></a></div>
                                <div class="ml-1 pt-2 bigHeadingCursive text-light rotate"><h4>Scrap the usual, be baki!</h4></div>
                            </div>
                        </div>
                    
                    <div class="rhinoAnimation d-flex justify-content-end">
                        <img src="/rhino.png" asp-append-version="true" />
                    </div>
                </div>
            </div>
            <Navigation />
        </header>
    );
});
