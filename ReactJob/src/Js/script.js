 class Joinnav extends HTMLElement{
    connectedCallback(){
        this.innerHTML= `
        <nav>
        <h5 class="h-h5">Select your Tutoria</h5>
                    <ol class="linked">
                        <li><a href="/view/Skills.html" id="landhome">Skills</a></li>
                        <li><a href="/view/HtmlClass.html">Html</a></li>
                        <li><a href="/view/CssClass.html">Css</a></li>
                        <li><a href="/view/BootstrapClass.html">Bootstrap</a></li>
                        <li><a href="/view/Javascript.html">Javascript</a></li>

                    </ol>
                </nav

        `
    }
}
 export default Joinnav;
 customElements.define('Joinnav', Joinnav)


