import React from "react";

function RecipeNutrients(props) {
  const { recipeNutrients } = props;
  return (
    <div className="col-md-6 bg-light">
      <div className="fs-5 pt-lg-3">
        <span><h6>Nutrition</h6></span>
      </div>

      <div className="col-xs-6">
        <ul className="list-group">
          <li className="list-group-item justify-content-between ">
            {recipeNutrients.FAT.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.FAT.quantity)}{" "}
              {recipeNutrients.FAT.unit}
            </span>
            <ul className="list-group">
              <li className="list-group-item  d-flex  justify-content-between ">
                {recipeNutrients.FASAT.label}
                <span className="align-items-right float-xl-end">
                  {" "}
                  {Math.round(recipeNutrients.FASAT.quantity)}{" "}
                  {recipeNutrients.FASAT.unit}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between ">
                {recipeNutrients.FATRN.label}
                <span className=" badge-primary badge-pill">
                  {" "}
                  {Math.round(recipeNutrients.FATRN.quantity)}{" "}
                  {recipeNutrients.FATRN.unit}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between ">
                {recipeNutrients.FAMS.label}
                <span className=" badge-primary badge-pill">
                  {" "}
                  {Math.round(recipeNutrients.FAMS.quantity)}{" "}
                  {recipeNutrients.FAMS.unit}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                {recipeNutrients.FAPU.label}
                <span className=" badge-primary badge-pill">
                  {" "}
                  {Math.round(recipeNutrients.FAPU.quantity)}{" "}
                  {recipeNutrients.FAPU.unit}
                </span>
              </li>
            </ul>
          </li>
          <li className="list-group-item justify-content-between ">
            {recipeNutrients.CHOCDF.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.CHOCDF.quantity)}{" "}
              {recipeNutrients.CHOCDF.unit}
            </span>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between ">
                {recipeNutrients.FIBTG.label}
                <span className=" badge-primary badge-pill">
                  {" "}
                  {Math.round(recipeNutrients.FIBTG.quantity)}{" "}
                  {recipeNutrients.FIBTG.unit}
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between ">
                {recipeNutrients.SUGAR.label}
                <span className=" badge-primary badge-pill">
                  {" "}
                  {Math.round(recipeNutrients.SUGAR.quantity)}{" "}
                  {recipeNutrients.SUGAR.unit}
                </span>
              </li>
            </ul>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.PROCNT.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.PROCNT.quantity)}{" "}
              {recipeNutrients.PROCNT.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.CHOLE.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.CHOLE.quantity)}{" "}
              {recipeNutrients.CHOLE.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.NA.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.NA.quantity)}{" "}
              {recipeNutrients.NA.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.K.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.K.quantity)}{" "}
              {recipeNutrients.K.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.MG.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.MG.quantity)}{" "}
              {recipeNutrients.MG.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.CA.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.CA.quantity)}{" "}
              {recipeNutrients.CA.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.ZN.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.ZN.quantity)}{" "}
              {recipeNutrients.ZN.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.P.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.P.quantity)}{" "}
              {recipeNutrients.P.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.VITA_RAE.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.VITA_RAE.quantity)}{" "}
              {recipeNutrients.VITA_RAE.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.VITA_RAE.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.VITA_RAE.quantity)}{" "}
              {recipeNutrients.VITA_RAE.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.VITC.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.VITC.quantity)}{" "}
              {recipeNutrients.VITC.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.VITB12.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.VITB12.quantity)}{" "}
              {recipeNutrients.VITB12.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.VITC.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.VITC.quantity)}{" "}
              {recipeNutrients.VITC.unit}
            </span>
          </li>
          <li className="list-group-item d-flex  justify-content-between ">
            {recipeNutrients.WATER.label}
            <span className="align-items-right float-xl-end">
              {" "}
              {Math.round(recipeNutrients.WATER.quantity)}{" "}
              {recipeNutrients.WATER.unit}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RecipeNutrients;
