import { component$, useStore } from '@builder.io/qwik';
import ProductCard from '../components/products/productcard';
import Carousel from '../components/carousel/carousel';
import Footer from '../components/footer/footer';

export default component$(() => {
  const hover = useStore({ seller: "seller", buyer: "buyer" });
  const products = [
    { category: "Kunst", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,", date: new Date(Date.UTC(2022, 6)), thumbnail: "/thumbnails/01.jpg" },
    { category: "Kunst", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,", date: new Date(Date.UTC(2022, 5)), thumbnail: "/thumbnails/02.jpg" },
    { category: "Kunst", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,", date: new Date(Date.UTC(2022, 1)), thumbnail: "/thumbnails/03.jpg" },
    { category: "Kunst", description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,", date: new Date(Date.UTC(2021, 2)), thumbnail: "/thumbnails/04.jpg" },
  ];
  return (
    <>
      <div class="container mt-4">
        <Carousel>
          <div class="carousel-item active">
            <img src="/tunnel.jpg" class="card-img-top" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/lost-places.jpg" class="card-img-top" alt="..." />
          </div>
        </Carousel>

        <div class="container section w-100">
          <div class="row p-4">
            <div class="col-md-6 py-2">
              <a href="seller"><img class={`seller ${hover.seller}`} src="/seller2.jpg" asp-append-version="true"
                onMouseOver$={() => hover.seller = "animated pulse fast"}
                onMouseOut$={() => hover.seller = "seller"} /></a>
            </div>
            <div class="col-md-6 py-2">
              <a href="buyer">
                <img class={`buyer ${hover.buyer}`} src="/buyer2.jpg" asp-append-version="true"
                  onMouseOver$={() => hover.buyer = "animated pulse fast"}
                  onMouseOut$={() => hover.buyer = "buyer"} />
              </a>
            </div>
          </div>
        </div>

        <div class="align-content-center text-center pt-4 pb-5">
          <h1 class="bigHeadingCursive">Unser Konzept</h1>

          <p style="font-size:18px">
            Wir vermitteln Euch an genau die richtigen Adressen! Von Kleinkünstler zum passenden Unternehmen und anders herum!<br />
            Die Reichweite ist hierbei der Schlüssel für jeden das individuelle Masterpiece zu bekommen.<br />
            Einzigartig macht uns dabei das Umdenken. Wir setzen auf Vielfalt statt Eintönigkeit! Abwechslung statt Alltag! <br />
            Verblüffung statt 08/15, denn mal so unter uns: Langweilig kann jeder.
          </p>

          <h1 class="bigHeadingCursive">Vorteile</h1>
          <p style="font-size:18px">
            Minimaler Aufwand- maximaler Erfolg! Beeindrucken Sie mit kreativen Unikaten.<br />
            Ob im Job, in der Familie oder bei Freunden! Begeistern Sie mit fabelhaften Dingen und sichern Sie sich eine schöne Zeit. <br />
            Wir übernehmen den Rest.<br />
          </p>
        </div>
      </div><div class="headingBarYellow mt-4">Trends, Neue Künstler</div>

      <div class="album py-5 bg-light">
        <div class="container">
          <div class="row">
            {
              products.map(p => <ProductCard description={p.description} category={p.category} creationdate={p.date} thumbnailPath={p.thumbnail} />)
            }
          </div>
        </div>
      </div>
      
      <Footer></Footer>
    </>
  )
});
