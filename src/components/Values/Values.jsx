import React, { useState } from "react";
import './Values.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import {
    MdOutlineArrowDropDown,
    MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import data from "../../utils/accordion.jsx"

const Values = () => {
    return (
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          {/* left side */}
          <div className="v-left">
            <div className="image-container">
              <img src="./assets/value.png" alt="value" />
            </div>
          </div>
  
          {/* right side */}
          <div className="flexColStart v-right">
            <span className="orangeText">Our Value</span>
            <span className="primaryText">Value We Give to You</span>
            <span className="secondaryText">
              We are always ready to help by providing the best services for you.<br />
              We believe a good place to live can make your life better.
            </span>
  
            <Accordion
              className="accordion"
              allowMultipleExpanded={false} // Chỉ cho phép một mục được mở cùng một lúc
              preExpanded={[0]}  // Mục đầu tiên (index 0) sẽ được mở trước
            >
              {data.map((item, index) => (
                <AccordionItem
                  className="accordionItem"
                  key={index}
                  uuid={index}
                >
                  <AccordionItemState>
                    {({ expanded }) => (
                      <div className={`accordionItem ${expanded ? 'expanded' : ''}`}>
                        <AccordionItemHeading>
                          <AccordionItemButton className="flexCenter accordionButton">
                            <div className="flexCenter icon">
                              {item.icon}
                            </div>
                            <span className="primaryText">{item.heading}</span>
                            <div className="flexCenter icon">
                              <MdOutlineArrowDropDown size={20} />
                            </div>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <p className="secondaryText">{item.detail}</p>
                        </AccordionItemPanel>
                      </div>
                    )}
                  </AccordionItemState>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    );
  };

export default Values
