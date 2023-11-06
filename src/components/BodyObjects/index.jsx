import React from "react";
import "./style.css";

const BodyObjects = () => {
  return (
    <div className="bodyObjects-wrapper">
      <p className="bodyObjects-first-item">Підводний світ</p>
      <div className="bodyObjects-first-object">
        <img
          src="https://artposter.com.ua/image/catalog/gallery/product_images/002469/flat/002469_flat.jpg"
          alt="Загадковий підводний світ"
        />
        <div className="text-content">
          <p className="text-first-name">
            Загадковий та дивовижний підводний світ: Великий океан у глибинах
          </p>
          <p className="text-first-description">
            Підводний світ - це унікальний всесвіт, який приховує в собі
            безмежні таємниці та краси. Цей світ, що охоплює понад 70% поверхні
            нашої планети, сповнений фантастичних створінь, захоплюючих
            створінь, захоплюючих краєвидів та вражаючих пригод. Давайте
            поринемо в глибини океану і досліджуємо його пишність.
          </p>
          <div className="text-first-button">Більше</div>
        </div>
      </div>
      <p className="bodyObjects-second-item">Морські жителі</p>
      <div className="bodyObject-second-object">
        <div className="left-content">
          <p className="bodyObjects-name-item">Восьминоги</p>
          <p className="bodyObject-second-description">
            <b>
              Восьминоги (Octopoda) є цікавими і загадковими мешканцями
              підводного світу. Вони виділяються своєю унікальною анатомією та
              здібностями, що робить їх цікавими об'єктами дослідження для
              морських біологів та природолюбів.
            </b>
          </p>
          <div className="second-object-button">Більше</div>
        </div>
        <div className="bodyObject-images">
          <div className="bodyObject-first-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMeLPgU7tj6Dnl71vdkHMqcTnwTxnz7j7C_ohVd0egRMFOneOTBEQsq0RgihpZ46zeSY&usqp=CAU"
              alt="Восьминоги"
            />
          </div>
          <div className="bodyObject-second-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QdzE2QAxOSbXCTqis_gOMjoGvu83S0ogOw&usqp=CAU"
              alt="Каракатиці"
            />
          </div>
        </div>
        <div className="right-content">
          <p className="bodyObjects-name-item-two">Каракатиці</p>
          <p className="bodyObject-second-description-two">
            <b>
              Каракатиці - загін молюсків з класу головоногих. Вони живуть
              переважно у теплих морях, поблизу берегів. Каракатиці вміють
              плавати, але зазвичай тримаються на дні, підстерігаючи свій
              видобуток.
            </b>
          </p>
          <div className="second-button-two">Більше</div>
        </div>
      </div>
      <div className="separate-button-wrapper">
        <div className="separate-button">
          <span class="separate-button-text">Більше</span>
        </div>
      </div>
      <p className="third-object-name">Черепахи</p>
      <div className="third-object-wrapper">
        <p className="bodyObjects-third-name">Черепахи</p>
        <div className="images-and-text">
          <div className="third-object-img-one">
            <img
              src="https://cikavosti.com/wp-content/uploads/2017/02/1e38b254f288ef9612218cfd3b557d2d.jpg"
              alt="Черепаха"
            />
          </div>
          <p className="third-object-description">
            Черепахи - це група рептилій, яка характеризується наявністю
            панцира, який є захистом. Ці тварини вважаються однією з найдавніших
            груп рептилій на Землі та мешкають у різних, включаючи моря, океани,
            річки, озера та сушу.
          </p>
          <div className="third-object-img-two">
            <img
              src="https://gagaru.club/uploads/posts/2023-05/1685053532_gagaru-club-p-redkie-cherepakhi-instagram-26.jpg"
              alt="Черепаха"
            />
          </div>
        </div>
      </div>
      <p className="fourth-object-name">Водорослі</p>
      <div className="fourth-object-wrapper">
        <div className="text-and-blocks">
          <div>
            <p className="fourth-object-name-two">
              <b>Види водоростей</b>
            </p>
            <div className="fourth-object-description">
              <p>
                <b>
                  Існує багато різних видів водоростей, вони поділяються на дві
                  основні групи: голозоїчні(сині зелені водорослі) та
                  коротеноїдно-фікоціанін-зелені водорослі.
                </b>
              </p>
            </div>
          </div>
          <div className="blocks-container">
            <div className="fourth-object-first-block"></div>
            <div className="fourth-object-second-block"></div>
            <div className="fourth-object-third-block"></div>
            <div className="fourth-object-fourth-block"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyObjects;
