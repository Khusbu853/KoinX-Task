import React, { useState, useEffect } from "react";
import "./cryptoCalculator.css";
import Faq from "./Faq";
import GetStarted from "./GetStarted";
import TrackPortfolio from "./TrackPortfolio";
import Footer from "./Footer";

const CryptoCalculator = () => {
  const [selectedIncome, setSelectedIncome] = useState("$0 - $18,200");
  const [taxRate, setTaxRate] = useState("0%");
  const [purchase, setPurchase] = useState("");
  const [sale, setSale] = useState("");
  const [expenses, setExpenses] = useState("");
  const [capitalGains, setCapitalGains] = useState("0");
  const [discount, setDiscount] = useState("");
  const [netCapitallong, setNetCapitallong] = useState("0");
  const [netCapitalshort, setNetCapitalshort] = useState("0");
  const [tax, setTax] = useState("0");

  const [investmentType, setInvestmentType] = useState("lessThan12Months");

  // function for choosing investement type
  const handleInvestmentTypeChange = (event) => {
    setInvestmentType(event.target.value);
  };

  const handlePurchaseChange = (e) => {
    setPurchase(e.target.value);
  };

  const handleSaleChange = (e) => {
    setSale(e.target.value);
  };

  const handleExpenseChange = (e) => {
    setExpenses(e.target.value);
  };

   
  // function for hanle Annual income change
  const handleIncomeChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedIncome(selectedOption);

    // Calculate tax rate based on the selected income range
    switch (selectedOption) {
      case "$0 - $18,200":
        setTaxRate("0%");
        break;
      case "$18,201 - $45,000":
        setTaxRate("Nil + 19% of excess over $18,200");
        break;
      case "$45,001 - $120,000":
        setTaxRate("$5,092 + 32.5% of excess over $45,000");
        break;
      case "$120,001 - $180,000":
        setTaxRate("$29,467 + 37% of excess over $120,000");
        break;
      case "$180,001+":
        setTaxRate("$51,667 + 45% of excess over $180,000");
        break;
      default:
        setTaxRate("0%");
    }
  };



  // function for calculating Tax to be pay
  useEffect(() => {
    // Calculate tax based on netCapitalsort, netCapitallong, and investmentType
    if (selectedIncome) {
      if (investmentType === "moreThan12Months") {
        const updatedTaxlong =
          (netCapitallong / 100) * taxRateValue(selectedIncome);
        setTax(updatedTaxlong);
      } else {
        const updatedTaxshort =
          (netCapitalshort / 100) * taxRateValue(selectedIncome);
        setTax(updatedTaxshort);
      }
    }
  }, [netCapitallong, netCapitalshort, investmentType, selectedIncome]);

  const taxRateValue = (incomeRange) => {
    // Define a function to return the tax rate based on income range
    switch (incomeRange) {
      case "$0 - $18,200":
        return 0;
      case "$18,201 - $45,000":
        return 19;
      case "$45,001 - $120,000":
        return 32.5;
      case "$120,001 - $180,000":
        return 37;
      case "$180,001+":
        return 45;
      default:
        return 0;
    }
  };




  // Use useEffect to calculate capital gains when all three prices(sale,purchase,expenses) are entered
  useEffect(() => {
    // Check if all three values are present and valid
    if (purchase !== "" && sale !== "" && expenses !== "") {
      // Get input values as numbers
      const purchasePrice = parseFloat(purchase);
      const salePrice = parseFloat(sale);
      const expensePrice = parseFloat(expenses);

      // Check if the input values are valid numbers
      if (!isNaN(purchasePrice) && !isNaN(salePrice) && !isNaN(expensePrice)) {
        // Calculate capital gains
        const gains = salePrice - purchasePrice - expensePrice;

        // Update the state with the calculated capital gains
        if (gains >= 0) {
          setCapitalGains(gains);
        } else {
          setCapitalGains("0");
        }
      } else {
        // Handle invalid input values here (e.g., display an error message)
        setCapitalGains("Invalid input");
      }
    } else {
      // Reset capital gains when any of the three prices is missing
      setCapitalGains("0");
    }
  }, [purchase, sale, expenses]);



  // for calculating discount for long term
  useEffect(() => {
    if (capitalGains > 0) {
      const calculatedDiscount = capitalGains * 0.5; // 50% discount
      setDiscount(calculatedDiscount);
    } else {
      setDiscount("0"); // No discount for negative capital gains
    }
  }, [capitalGains]);

  

  // net capital gain for long term
  useEffect(() => {
    if (investmentType === "moreThan12Months") {
      const calculateNetcapital = capitalGains - discount;
      if (calculateNetcapital >= 0) {
        setNetCapitallong(calculateNetcapital);
      } else {
        setNetCapitallong("0.00");
      }
    }
  }, [capitalGains, investmentType, discount]);



  // net capital gain
  useEffect(() => {
    if (investmentType !== "moreThan12Months") {
      // Check if all three values are present and valid
      if (purchase !== "" && sale !== "" && expenses !== "") {
        // Get input values as numbers
        const purchasePrice = parseFloat(purchase);
        const salePrice = parseFloat(sale);
        const expensePrice = parseFloat(expenses);

        // Check if the input values are valid numbers
        if (
          !isNaN(purchasePrice) &&
          !isNaN(salePrice) &&
          !isNaN(expensePrice)
        ) {
          // Calculate capital gains
          const gains = salePrice - purchasePrice - expensePrice;

          // Update the state with the calculated capital gains
          if (gains >= 0) {
            setNetCapitalshort(gains);
          } else {
            setNetCapitalshort("0.00");
          }
        } else {
          // Handle invalid input values here (e.g., display an error message)
          setNetCapitalshort("Invalid input");
        }
      } else {
        // Reset capital gains when any of the three prices is missing
        setNetCapitalshort("0.00");
      }
    }
  }, [purchase, sale, expenses, investmentType]);

  return (
    <div>
      <div className="main-div">
        <div className="tax-calculator-main">
          <h3 className="tax-calculator-title" style={{ fontSize: "36px" }}>
            Free Crypto Tax Calculator Australia
          </h3>
          <div className="tax-calculator-top">
            <div className="tax-calculator-year-div">
              <h5 className="tax-calculator-year-title">Financial Year</h5>
              <div
                style={{
                  width: "100%",
                  background: "#EFF2F5",
                  borderRadius: "5px",
                }}
                className="css-plnanq"
              >
                <select
                  style={{
                    fontSize: "16px",
                    padding: "15px 0px",
                    border: "none",
                    borderRadius: "5px",
                    background: "#EFF2F5",
                  }}
                  aria-invalid="false"
                  aria-hidden="true"
                  tabindex="-1"
                  disabled=""
                  className="css-1k3x8v3"
                  name="selectedYear"
                >
                  <option value="FY 2023-24">FY 2023-24</option>
                </select>
              </div>
            </div>

            <div className="tax-calculator-country-div">
              <p className="tax-calculator-country-title" style={{fontSize: '15px'}}>Country</p>
              <div
                style={{
                  width: "100%",
                  background: "#EFF2F5",
                  borderRadius: "5px",
                }}
                className="css-plnanq"
              >
                <select
                  style={{
                    fontSize: "16px",
                    padding: "15px 0px",
                    border: "none",
                    borderRadius: "5px",
                    background: "#EFF2F5",
                  }}
                  aria-invalid="false"
                  aria-hidden="true"
                  tabindex="-1"
                  disabled=""
                  className="css-1k3x8v3"
                  name="selectedCountry"
                >
                  <option value="Australia">🌏 Australia</option>
                </select>
              </div>
            </div>
          </div>
          <div className="Ttax-calculator-divider"></div>

          <div className="tax-calculator-bottom-div">
            <div>
              <p
                className="tax-calculator-bottom-titles"
                style={{ textAlign: "left" }}
              >
                Enter purchase price of Crypto
              </p>
              <div className="css-feqhe6">
                <div className="css-1bp1ao6">
                  <div style={{ display: "flex" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        padding: "15px 0px",
                        border: "none",
                        borderRadius: "5px",
                        background: "#EFF2F5",
                      }}
                    >
                      $
                    </span>
                    <input
                      aria-invalid="false"
                      id=":R8ommmida:"
                      type="number"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        padding: "15px 0px",
                        border: "none",
                        borderRadius: "5px",
                        background: "#EFF2F5",
                        width: "100%",
                      }}
                      className="css-1x5jdmq"
                      name="purchasePrice"
                      value={purchase}
                      onChange={handlePurchaseChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p
                className="tax-calculator-bottom-titles"
                style={{ textAlign: "left" }}
              >
                Enter sale price of Crypto
              </p>
              <div className="css-feqhe6">
                <div className="css-1bp1ao6">
                  <div style={{ display: "flex" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        padding: "15px 0px",
                        border: "none",
                        borderRadius: "5px",
                        background: "#EFF2F5",
                      }}
                    >
                      $
                    </span>
                    <input
                      aria-invalid="false"
                      id=":R8ommmida:"
                      type="number"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        padding: "15px 0px",
                        border: "none",
                        borderRadius: "5px",
                        background: "#EFF2F5",
                        width: "100%",
                      }}
                      className="css-1x5jdmq"
                      name="purchasePrice"
                      value={sale}
                      onChange={handleSaleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p
                className="tax-calculator-bottom-titles"
                style={{ textAlign: "left" }}
              >
                Enter your Expenses
              </p>
              <div className="css-feqhe6">
                <div className="css-1bp1ao6">
                  <div style={{ display: "flex" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        padding: "15px 0px",
                        border: "none",
                        borderRadius: "5px",
                        background: "#EFF2F5",
                      }}
                    >
                      $
                    </span>
                    <input
                      aria-invalid="false"
                      id=":R8ommmida:"
                      type="number"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        padding: "15px 0px",
                        border: "none",
                        borderRadius: "5px",
                        background: "#EFF2F5",
                        width: "100%",
                      }}
                      className="css-1x5jdmq"
                      name="purchasePrice"
                      value={expenses}
                      onChange={handleExpenseChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p
                className="tax-calculator-bottom-titles"
                style={{ textAlign: "left" }}
              >
                Investment Type
              </p>
              <div>
                <div style={{ display: "flex" }}>
                  <label
                    className="radio-label"
                    style={{ padding: "10px 30px" }}
                  >
                    <input
                      type="radio"
                      value="lessThan12Months"
                      checked={investmentType === "lessThan12Months"}
                      onChange={handleInvestmentTypeChange}
                    />
                    {/* <div className="rectangular-box"></div> */}
                    <br></br>
                    &lt;12 months
                  </label>
                  <label
                    className="radio-label"
                    style={{ padding: "10px 30px" }}
                  >
                    <input
                      type="radio"
                      value="moreThan12Months"
                      checked={investmentType === "moreThan12Months"}
                      onChange={handleInvestmentTypeChange}
                    />
                    {/* <div className="rectangular-box"></div> */}
                    <br></br>
                    &gt;12 months
                  </label>
                </div>
              </div>
            </div>

            <div>
              <p
                className="tax-calculator-bottom-titles"
                style={{ textAlign: "left" }}
              >
                Select Your Annual Income
              </p>
              <select
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  padding: "15px 0px",
                  border: "none",
                  borderRadius: "5px",
                  background: "#EFF2F5",
                  width: "100%",
                }}
                value={selectedIncome}
                onChange={handleIncomeChange}
              >
                <option>$0 - $18,200</option>
                <option>$18,201 - $45,000</option>
                <option>$45,001 - $120,000</option>
                <option>$120,001 - $180,000</option>
                <option>$180,001+</option>
              </select>
            </div>

            <div>
              <p
                className="tax-calculator-bottom-titles"
                style={{ textAlign: "left" }}
              >
                Tax Rate
              </p>
              <input
                aria-invalid="false"
                type="text"
                value={taxRate}
                readOnly
                style={{
                  fontSize: "16px",
                  textAlign: "left",
                  padding: "15px 0px",
                  border: "none",
                  borderRadius: "5px",
                  background: "#EFF2F5",
                  width: "100%",
                }}
              />
            </div>

            {investmentType === "moreThan12Months" && (
              <div>
                <p
                  className="tax-calculator-bottom-titles"
                  style={{ textAlign: "left" }}
                >
                  Capital gains amount
                </p>
                <div className="Mcss-feqhe6">
                  <div className="css-1bp1ao6">
                    <input
                      aria-invalid="false"
                      id=":R8ommmida:"
                      type="number"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        padding: "15px 0px",
                        border: "none",
                        borderRadius: "5px",
                        background: "#EFF2F5",
                        width: "100%",
                      }}
                      className="css-1x5jdmq"
                      name="capitalGains"
                      value={parseFloat(capitalGains).toFixed(2)} // Display calculated capital gains
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>
            )}

            {investmentType === "moreThan12Months" && (
              <div>
                <p
                  className="tax-calculator-bottom-titles"
                  style={{ textAlign: "left" }}
                >
                  Discount for long term gains
                </p>
                <div className="css-feqhe6">
                  <div className="css-1bp1ao6">
                    <input
                      aria-invalid="false"
                      id=":R98mmmida:"
                      type="number"
                      style={{
                        fontSize: "16px",
                        textAlign: "left",
                        padding: "15px 0px",
                        border: "none",
                        borderRadius: "5px",
                        background: "#EFF2F5",
                        width: "100%",
                      }}
                      className="css-1x5jdmq"
                      name="salePrice"
                      value={parseFloat(discount).toFixed(2)}
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>
            )}

            <div
              className="tax-calculator-tax-detail"
              style={{ background: "#EBF9F4" }}
            >
              <p className="tax-calculator-bottom-titles">
                Net Capital gains tax amount
              </p>
              <h5
                className="tax-calculator-tax-price"
                style={{ color: "#0fba83" }}
              >
                ${" "}
                {investmentType === "moreThan12Months"
                  ? netCapitallong
                  : netCapitalshort}
              </h5>
            </div>
            <div className="tax-calculator-tax-detail">
              <p className="tax-calculator-bottom-titles">
                The tax you need to pay*
              </p>
              <h5
                className="tax-calculator-tax-price"
                style={{ color: "#0141cf" }}
              >
                $ {parseFloat(tax).toFixed(2)}
              </h5>
            </div>
          </div>
        </div>

        {/* Get-started */}
        <GetStarted />

        {/* faq section */}
        <Faq />
      </div>

      {/* Track portfolio */}
      <TrackPortfolio />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default CryptoCalculator;
