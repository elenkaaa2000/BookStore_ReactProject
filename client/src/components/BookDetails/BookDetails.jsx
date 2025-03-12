export default function BookDetails(){
    return(
       <section className="section book-details">
            <section className="book-details-content">
                <main className="main-details">
                    <div className="book-image">
                    <img src="https://www.ciela.com/media/catalog/product/cache/9a7ceae8a5abbd0253425b80f9ef99a5/o/n/onyx-storm-bg.jpg" alt="" />
                    </div>
                    <div className="book-description">
                        <h2>Буря от оникс</h2>
                        <p><span>Издател:</span> Сиела</p>
                        <p><span>Автор:</span> Ребека Ярос</p>
                       <p><span>Цена:</span> 18.99</p>
                        <div className="book-review">
                            <h3>Описание</h3>
                            <p>След почти осемнайсет месеца във военния колеж „Басгайът“ Вайълет Соренгейл вече няма
                                време
                                за уроци. Няма време и за колебание. Защото битката е започнала, а врагът напредва както
                                извън стените, така и измежду собствените им редици. Няма начин да се довериш на когото
                                и да
                                било.

                                Вайълет трябва да се отправи на мисия отвъд падналите прегради на Ариша, за да търси
                                съюзници в непознати земи. Това пътуване ще постави на изпитание остроумието, късмета и
                                силата ѝ, ала тя е готова на всичко, за да спаси това, което обича – драконите си,
                                семейството си, дома си и… него.

                                Дори ако това означава да пази тайна, толкова голяма, че може да разруши всичко.

                                Трябва ѝ армия. Трябва ѝ сила. Трябва ѝ магия. И единственото нещо, което само Вайълет
                                може
                                да открие – истината.

                                Завихря се буря… но не всеки ще преживее яростта ѝ.</p>
                        </div>
                    </div>

                </main>

                <aside className="aside-details">
                    <table>
                        <tr>
                            <td><strong>Заглавие</strong></td>
                            <td>Буря от оникс</td>
                        </tr>
                        <tr>
                            <td><strong>Автор</strong></td>
                            <td>Ребека Ярос</td>
                        </tr>
                        <tr>
                            <td><strong>Издателство</strong></td>
                            <td>Сиела</td>
                        </tr>
                        <tr>
                            <td><strong>Година на издаване</strong></td>
                            <td>2025</td>
                        </tr>
                        <tr>
                            <td><strong>ISBN</strong></td>
                            <td>978-954-28-4941-4</td>
                        </tr>
                        <tr>
                            <td><strong>Корица</strong></td>
                            <td>Мека</td>
                        </tr>
                        <tr>
                            <td><strong>Брой страници</strong></td>
                            <td>784</td>
                        </tr>                        
                        <tr>
                            <td><strong>Език</strong></td>
                            <td>български</td>
                        </tr>
                        <tr>
                            <td><strong>Превод</strong></td>
                            <td>Марияна Христова</td>
                        </tr>
                        
                        
                    </table>
                </aside>
            </section>

            <hr/>

            <section className="book-details-comments">

                <section className="all-comments">
                    <h3>Мнения</h3>
                    <div className="comment">
                        <h4>Автор: Ивайла</h4>
                        <p>Направо ти взима дъха. Не може да спреш да четеш</p>
                        <hr/>
                    </div>

                    <div className="comment">
                        <h4>Автор: Ивайла</h4>
                        <p>Направо ти взима дъха. Не може да спреш да четеш</p>
                        <hr/>
                    </div>
                    <div className="comment">
                        <h4>Автор: Ивайла</h4>
                        <p>Направо ти взима дъха. Не може да спреш да четеш</p>
                        <hr/>
                    </div>
                    <div className="comment">
                        <h4>Автор: Ивайла</h4>
                        <p>Направо ти взима дъха. Не може да спреш да четеш</p>
                        <hr/>
                    </div>
                    <div className="comment">
                        <h4>Автор: Ивайла</h4>
                        <p>Направо ти взима дъха. Не може да спреш да четеш</p>
                        <hr/>
                    </div>
                </section>

                <section className="add-comment">
                    <h3>Вие оценявате <strong>Буря от оникс</strong></h3>
                    <form action="#">
                        <div className="field">
                            <label htmlFor="author">Автор</label>
                            <input type="text" id="author" name="author"/>
                        </div>
                        <div className="field">
                            <label htmlFor="author">Мнение</label>
                            <textarea name="author" id="author"></textarea>
                        </div>
                        <input type="submit" value="Изпрати"/>
                    </form>
                </section>

            </section>

        </section>
    )
}