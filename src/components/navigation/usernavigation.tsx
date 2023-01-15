import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './usernavigation.css?inline';

export default component$(() => {
    useStylesScoped$(styles);
    const hovers = useStore({ message: "d-none"});
    return (
        <div class="row">
            <div class="notification px-2">
                <a href="/cart">
                    <i class="fas fa-shopping-cart iconSize"></i>
                </a>
                <span class="fa-stack fa-3x badge">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <strong class="fa-stack-1x text-primary">3</strong>
                </span>
            </div>
            <a class="px-2 h-100" href="messages/" 
                onMouseOver$={() => hovers.message = "animated fadeIn pl-3 d-inline align-top"}
                onMouseOut$={() => hovers.message = "pl-3 d-none"}
            > <i class="fas fa-envelope iconBigSize"></i><div class={`small ${hovers.message}`}>Nachrichten</div></a>
            <a href="Identity/Account/Manage" class="px-3 link"><i class="fas fa-user-circle iconBigSize"></i></a>
        </ div>
    )
});
