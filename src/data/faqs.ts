import React from 'react';

export interface FaqItemData {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

export interface FaqCategoryData {
  id: string;
  title: string;
  iconName: string;
  faqs: FaqItemData[];
}

export const faqCategories: FaqCategoryData[] = [
  {
    id: "signs-symptoms",
    title: "1. Signs and Symptoms",
    iconName: "Thermometer",
    faqs: [
      {
        id: "faq-1",
        question: "What are the most common signs of a slab leak?",
        answer: "Common signs include a warm or damp floor, unexplained water use, a meter that moves when fixtures are off, lower water pressure, or the sound of running water beneath the floor. One sign alone does not confirm a slab leak. First rule out toilets, irrigation, appliances, and visible plumbing before arranging slab leak detection."
      },
      {
        id: "faq-2",
        question: "Does a warm floor always mean there is a slab leak?",
        answer: "No. A warm floor can come from sunlight, HVAC ductwork, radiant heating, or a nearby hot-water appliance. A hot-water slab leak becomes more likely when the warm area is new, the water meter moves with fixtures off, or the water heater runs more often. Pressure testing and leak locating are needed before repair."
      },
      {
        id: "faq-3",
        question: "Can a slab leak exist without visible water?",
        answer: "Yes. Water can escape beneath concrete for some time before reaching the surface. The first clues may be increased water use, a pressure drop, a faint running-water sound, or a warm section of flooring. A dry surface does not rule out an under-slab water-line leak."
      },
      {
        id: "faq-4",
        question: "Why does the water meter move when every fixture is off?",
        answer: "Meter movement usually means water is still passing through the private plumbing system. Check toilets, irrigation, appliances, outdoor faucets, and pool equipment first. If those sources are off and the meter continues moving, professional water-line pressure testing can help determine whether a hidden plumbing leak is present."
      },
      {
        id: "faq-5",
        question: "Can a slab leak cause low water pressure?",
        answer: "It can, especially when a pressurized water line is losing a significant amount of water. However, low pressure may also come from a faulty pressure regulator, a partially closed valve, mineral buildup, or a utility-side issue. Testing should identify whether the pressure loss is caused by a hidden leak or another plumbing problem."
      },
      {
        id: "faq-6",
        question: "What does a slab leak sound like?",
        answer: "Homeowners often describe a soft hiss, rushing sound, or continuous water noise beneath tile or concrete when no fixture is running. Sound alone cannot identify the exact pipe or location. Acoustic leak detection works best after visible water uses are shut off and the affected line is narrowed down."
      },
      {
        id: "faq-7",
        question: "Can a slab leak cause damp flooring or a musty smell?",
        answer: "Yes. Escaping water may move through cracks, joints, or flooring materials and create damp carpet, discolored grout, loose flooring, or a musty odor. Moisture can also come from appliances, condensation, roof leaks, or exterior water intrusion, so the source should be confirmed before the floor is opened."
      }
    ]
  },
  {
    id: "detection-testing",
    title: "2. Detection and Testing",
    iconName: "Search",
    faqs: [
      {
        id: "faq-8",
        question: "How is a slab leak detected?",
        answer: "Detection normally starts with a symptom review, a water-meter check, and inspection of visible fixtures. The plumber may then pressure-test hot and cold lines separately, isolate branches, and use acoustic or electronic equipment to narrow the suspected area. The goal is to gather enough evidence before recommending access or repair."
      },
      {
        id: "faq-9",
        question: "Can a slab leak be found without opening the floor?",
        answer: "Often, the suspected line and area can be narrowed down without opening the floor. Pressure testing, line isolation, acoustic listening, and moisture checks can reduce unnecessary demolition. No method guarantees that every leak can be confirmed without limited access, especially when pipes are deep, pressure is low, or more than one leak exists."
      },
      {
        id: "faq-10",
        question: "What is water-line pressure testing?",
        answer: "Pressure testing checks whether a closed plumbing line holds stable pressure. A continuing drop may indicate water loss, but it does not show the exact leak location. The result is combined with line isolation, meter observation, and electronic or acoustic locating to determine which part of the system needs further attention."
      },
      {
        id: "faq-11",
        question: "How are hot- and cold-water lines isolated for testing?",
        answer: "The plumber separates sections of the plumbing system using valves, fixtures, manifolds, or temporary test connections. Each section is tested independently to see which line loses pressure. Isolation prevents the entire home from being treated as one system and helps avoid opening surfaces in the wrong area."
      },
      {
        id: "faq-12",
        question: "How accurate is electronic or acoustic leak detection?",
        answer: "Electronic and acoustic tools can be very useful, but accuracy depends on pipe material, depth, water pressure, background noise, flooring, and the size of the leak. The equipment should support a complete diagnostic process rather than replace it. Responsible technicians explain the likely area and any remaining uncertainty before repair."
      },
      {
        id: "faq-13",
        question: "How long does slab leak detection take?",
        answer: "A straightforward inspection may be completed in one visit, while complex systems can require additional testing. Time depends on the number of plumbing branches, access to valves, whether the leak is active, and how clearly the line loses pressure. Avoid guaranteed time claims because each property and plumbing layout is different."
      },
      {
        id: "faq-14",
        question: "Does leak detection repair the pipe?",
        answer: "No. Detection confirms water loss and narrows the affected line or area. Repair is a separate step and may involve spot repair, direct under-slab access, water-line rerouting, or partial repiping. The homeowner should receive an explanation of the findings before choosing a repair method."
      }
    ]
  },
  {
    id: "hot-water",
    title: "3. Hot-Water Slab Leaks",
    iconName: "Thermometer",
    faqs: [
      {
        id: "faq-15",
        question: "What are the main signs of a hot-water slab leak?",
        answer: "Typical signs include a new warm area on tile or concrete, a water heater that runs more often, reduced hot-water availability, higher water or energy use, and a meter that moves with fixtures off. These signs should be tested because warm flooring can also have non-plumbing causes."
      },
      {
        id: "faq-16",
        question: "Can a hot-water slab leak make the water heater run continuously?",
        answer: "Yes. When hot water escapes beneath the slab, the heater may keep reheating replacement water even though no faucet is open. Check for normal hot-water uses and appliance demands first. If the heater cycles without explanation and the water meter moves, hot-line pressure testing is appropriate."
      },
      {
        id: "faq-17",
        question: "Can a hidden hot-water leak increase energy costs?",
        answer: "It can. The home may pay for both the lost water and the energy used to heat replacement water. A sudden increase in water and energy use, combined with warm flooring or frequent heater operation, strengthens the case for testing. Bills alone cannot prove that the leak is under the slab."
      },
      {
        id: "faq-18",
        question: "What else can cause a warm floor?",
        answer: "Direct sunlight, HVAC ducts, radiant heating, hot-water appliances, and outdoor heat can warm a floor. Compare the area at different times, check whether the water heater runs unexpectedly, and observe the meter with fixtures off. A stable warm area with no water loss may not be a slab leak."
      },
      {
        id: "faq-19",
        question: "Can I continue using cold water if the hot-water line is leaking?",
        answer: "Sometimes the hot-water system can be isolated while cold water remains available, but this depends on the plumbing layout and the severity of the leak. Do not assume the systems are safely separated. A plumber should confirm which line is affected and explain what can remain in use."
      },
      {
        id: "faq-20",
        question: "Should I turn off the water heater if I suspect a hot-water slab leak?",
        answer: "If the heater is running continuously or the hot-water line has been shut off, turning the heater off may prevent unnecessary heating or equipment damage. Follow the manufacturer’s safe shutoff instructions and avoid working on gas or electrical connections. When uncertain, shut off the main water and request professional guidance."
      },
      {
        id: "faq-21",
        question: "How is a hot-water slab leak repaired?",
        answer: "Repair may involve accessing and replacing the damaged pipe section, rerouting the hot-water line through walls or ceilings, or replacing a larger branch when the pipe condition is poor. The choice depends on the leak location, flooring, pipe history, and whether an accessible replacement route is available."
      }
    ]
  },
  {
    id: "cold-water",
    title: "4. Cold-Water Slab Leaks",
    iconName: "Droplets",
    faqs: [
      {
        id: "faq-22",
        question: "What are the signs of a cold-water slab leak?",
        answer: "A cold-water leak may cause meter movement, unexplained water use, lower pressure, damp flooring, water near the slab edge, or a running-water sound without a warm spot. Because the water is not heated, these leaks can remain unnoticed longer than hot-water leaks."
      },
      {
        id: "faq-23",
        question: "Can a cold-water slab leak occur without a warm floor?",
        answer: "Yes. A warm floor is mainly associated with hot-water lines. Cold-water leaks may show only as moisture, increased water use, pressure loss, or meter movement. The absence of warmth does not rule out an under-slab plumbing leak."
      },
      {
        id: "faq-24",
        question: "Can a cold-water leak stay hidden without visible moisture?",
        answer: "Yes. The water may move through soil, joints, or voids beneath the slab rather than appearing indoors. If the meter moves with all known water uses off, line testing can determine whether the loss is in the home’s cold-water system, irrigation, or service line."
      },
      {
        id: "faq-25",
        question: "Will a cold-water slab leak reduce pressure?",
        answer: "A substantial leak can reduce pressure at fixtures, but pressure may also fall because of a regulator, valve, supply, or mineral-restriction problem. Pressure testing should compare the system under controlled conditions rather than using fixture flow alone as proof of a slab leak."
      },
      {
        id: "faq-26",
        question: "Could an irrigation or toilet leak look like a cold-water slab leak?",
        answer: "Yes. Toilets, irrigation valves, outdoor faucets, pool systems, and appliance connections can create continuous meter movement and high water use. These easier-to-access sources should be checked before concluding that a pipe is leaking beneath concrete."
      },
      {
        id: "faq-27",
        question: "How can the water meter help identify a cold-water leak?",
        answer: "Turn off fixtures, irrigation, appliances that use water, and any automatic refill systems. Note the meter reading or low-flow indicator, wait without using water, and check again. Continued movement indicates water loss somewhere after the meter, but further testing is required to locate the source."
      },
      {
        id: "faq-28",
        question: "How is a cold-water slab leak repaired?",
        answer: "Options include spot repair through controlled slab access, rerouting the affected branch through a wall or ceiling, or partial repiping when a larger pipe section is unreliable. The plumber should first confirm the line, review access, and pressure-test the completed repair."
      }
    ]
  },
  {
    id: "repair-options",
    title: "5. Slab Leak Repair Options",
    iconName: "Wrench",
    faqs: [
      {
        id: "faq-29",
        question: "How is a slab leak repaired?",
        answer: "After the affected line is confirmed, the plumber selects a method based on location, pipe condition, flooring, and access. Common options are spot repair, direct under-slab repair, water-line rerouting, or partial repiping. The repaired or replacement line should be pressure-tested before normal use resumes."
      },
      {
        id: "faq-30",
        question: "What is a slab leak spot repair?",
        answer: "Spot repair opens a controlled area near a confirmed leak and replaces the damaged pipe section. It can be suitable for an isolated failure when the surrounding pipe appears reliable and the access point is reasonable. It is less suitable when the same line has repeated leaks or broad deterioration."
      },
      {
        id: "faq-31",
        question: "What is direct under-slab pipe repair?",
        answer: "Direct repair reaches the damaged water line through a limited opening in the floor and concrete. The work area is protected, the pipe is exposed, the failed section is replaced, and the line is tested. Concrete, tile, and finish restoration should be clearly addressed in the estimate."
      },
      {
        id: "faq-32",
        question: "Does every slab leak repair require opening concrete?",
        answer: "No. A leaking line can sometimes be rerouted through a wall, ceiling, attic, or another accessible path. Rerouting may avoid slab access, but it can still require drywall openings. The home’s layout determines whether an alternative route is practical."
      },
      {
        id: "faq-33",
        question: "What happens to the tile or flooring after a slab repair?",
        answer: "The repair may require removing tile, carpet, wood, or other finishes at the access point. Some plumbing estimates include basic concrete closure but exclude matching tile, flooring, drywall, paint, or cabinetry. The homeowner should ask exactly which restoration tasks are included before approving work."
      },
      {
        id: "faq-34",
        question: "How is the best slab leak repair method chosen?",
        answer: "The decision should consider leak location, pipe material, previous repairs, condition of the surrounding line, flooring value, access, disruption, and the likelihood of another failure. The lowest initial price is not always the best option when it leaves a weak pipe section in place."
      },
      {
        id: "faq-35",
        question: "Can the same pipe leak again after repair?",
        answer: "Yes. A repaired joint or section may remain sound while another weak point develops elsewhere on the same line. Repeated failures may indicate that rerouting or partial repiping deserves consideration. Post-repair pressure testing confirms the current work but cannot guarantee the condition of every hidden pipe section."
      }
    ]
  },
  {
    id: "rerouting-repiping",
    title: "6. Water-Line Rerouting and Repiping",
    iconName: "Wrench",
    faqs: [
      {
        id: "faq-36",
        question: "What is water-line rerouting for a slab leak?",
        answer: "Rerouting disconnects or abandons the leaking under-slab section and installs a replacement line through a more accessible route. The new path may use walls, ceilings, attic space, or another approved area. The old pipe normally remains unused beneath the slab."
      },
      {
        id: "faq-37",
        question: "When is rerouting better than spot repair?",
        answer: "Rerouting may be preferable when slab access would damage valuable flooring, the leak is difficult to reach, the pipe has failed more than once, or the surrounding line appears unreliable. Spot repair may be reasonable for a clearly isolated failure with practical access."
      },
      {
        id: "faq-38",
        question: "Does rerouting avoid all property damage?",
        answer: "Rerouting may avoid opening the concrete floor, but the new line still needs access through walls, ceilings, cabinets, or utility spaces. Drywall and paint repair may be required. A proper estimate should show the proposed route and identify every planned access point."
      },
      {
        id: "faq-39",
        question: "Can only one water line be rerouted?",
        answer: "Yes. A single hot- or cold-water branch can often be rerouted without replacing the entire plumbing system. The plumber must identify which fixtures the branch serves, plan a code-compliant route, and confirm that the remaining hidden piping is still serviceable."
      },
      {
        id: "faq-40",
        question: "Can the old leaking pipe remain under the slab?",
        answer: "Usually, the old section can remain in place after it is disconnected from the active plumbing system. It should be properly isolated so it cannot continue receiving pressurized water. The replacement line becomes the new active route."
      },
      {
        id: "faq-41",
        question: "What is partial repiping?",
        answer: "Partial repiping replaces one branch or selected section of the water system rather than the whole home. It is considered when several fixtures share a weak line, repeated leaks occur in the same area, or a larger section is more economical to replace than repair repeatedly."
      },
      {
        id: "faq-42",
        question: "What is the difference between partial and whole-home repiping?",
        answer: "Partial repiping targets a defined branch or problem section. Whole-home repiping replaces most or all supply piping. The wider option may be considered when failures are widespread, pipe material is consistently deteriorated, or multiple branches have already required repair."
      }
    ]
  },
  {
    id: "cost-estimates-insurance",
    title: "7. Cost, Estimates, and Insurance",
    iconName: "Calculator",
    faqs: [
      {
        id: "faq-43",
        question: "How much does slab leak detection cost?",
        answer: "The price depends on the number of lines tested, access to valves and fixtures, equipment used, property size, and whether additional testing is required. Avoid relying on a single advertised number. Ask whether the quoted detection fee includes pressure testing, line isolation, locating, and written findings."
      },
      {
        id: "faq-44",
        question: "What affects the cost of slab leak repair?",
        answer: "Major cost factors include the repair method, leak location, pipe depth, flooring, access, pipe material, number of affected lines, emergency scheduling, and surface restoration. A reroute may cost more in plumbing labor but avoid expensive floor damage, while direct repair may involve concrete and tile work."
      },
      {
        id: "faq-45",
        question: "Is spot repair always cheaper than rerouting?",
        answer: "Not always. Spot repair may have a lower plumbing price but require costly tile or floor restoration. Rerouting can involve more piping and wall access but may avoid slab demolition. Compare the full project scope, not only the plumber’s line item."
      },
      {
        id: "faq-46",
        question: "What should a slab leak estimate include?",
        answer: "The estimate should identify detection charges, repair method, pipe material, planned access, pressure testing, water shutoff time, concrete closure, drywall or flooring exclusions, permit needs, and warranty terms. It should also explain what happens if the actual conditions differ from the initial findings."
      },
      {
        id: "faq-47",
        question: "Can the price change after the leak is located?",
        answer: "Yes. Detection may reveal a different line, deeper access, multiple weak points, or a need for rerouting instead of spot repair. The contractor should explain any change before continuing and provide an updated scope rather than relying on an open-ended authorization."
      },
      {
        id: "faq-48",
        question: "Does homeowners insurance cover slab leak damage?",
        answer: "Coverage varies by policy and cause. Some policies may cover sudden resulting water damage or access needed to reach the pipe, while excluding the failed pipe itself or long-term seepage. Document the damage, obtain a written diagnosis, and ask the insurer which parts of detection, access, repair, and restoration are covered."
      },
      {
        id: "faq-49",
        question: "Are emergency slab leak services more expensive?",
        answer: "They can be. After-hours scheduling, urgent travel, water extraction, and immediate temporary work may add cost. Ask whether the call includes diagnosis only, a temporary shutoff, or permanent repair. Do not assume that an emergency visit guarantees completion of the full repair during the first appointment."
      }
    ]
  },
  {
    id: "emergencies-home-safety",
    title: "8. Emergencies and Home Safety",
    iconName: "ShieldAlert",
    faqs: [
      {
        id: "faq-50",
        question: "Is every slab leak an emergency?",
        answer: "No, but every confirmed leak should be addressed promptly. It becomes urgent when water is actively spreading, pressure drops suddenly, the meter moves rapidly, flooring is lifting, or moisture is near electrical equipment. A slow hidden leak can still cause damage even when it is not immediately dangerous."
      },
      {
        id: "faq-51",
        question: "When should I shut off the main water supply?",
        answer: "Shut off the main water when water is actively spreading, the meter is moving rapidly, pressure has changed suddenly, or you cannot safely control the leak. If the situation is stable and a plumber is arriving soon, ask for guidance. Make sure household members know where the shutoff is located."
      },
      {
        id: "faq-52",
        question: "What should I do if water is near an electrical outlet or appliance?",
        answer: "Keep people away from the wet area and do not touch outlets, cords, appliances, or panels while standing in water. Shut off the water from a dry location if possible. Electrical power should only be disconnected when it can be done safely; otherwise contact emergency professionals."
      },
      {
        id: "faq-53",
        question: "What can I do before the plumber arrives?",
        answer: "Stop unnecessary water use, move furniture and valuables away from moisture, take photos of visible damage, note the meter reading, and describe where the floor feels warm or damp. Do not break tile or concrete to search for the leak, because the suspected location may be wrong."
      },
      {
        id: "faq-54",
        question: "Can I continue using water in the home?",
        answer: "Limited use may be possible when the affected line can be isolated, but continued use can increase water loss and property damage. If the leak is active or the meter moves quickly, shut off the main supply. A plumber should confirm which fixtures can be used safely."
      },
      {
        id: "faq-55",
        question: "What if no plumber is immediately available?",
        answer: "Control the water first. Shut off the main supply, protect belongings, avoid wet electrical areas, and arrange water extraction when necessary. A temporary shutoff prevents additional pressurized loss but does not repair the pipe. Keep the water off until a qualified provider confirms it is safe to restore service."
      },
      {
        id: "faq-56",
        question: "Can I wait several days before arranging detection?",
        answer: "Waiting increases the chance of higher water use, flooring damage, mold growth, or a larger repair area. Even when the floor is dry, ongoing meter movement indicates continued loss. Arrange assessment promptly and treat active spreading water as urgent."
      }
    ]
  },
  {
    id: "service-areas",
    title: "9. Tucson Service Areas and Local Questions",
    iconName: "MapPin",
    faqs: [
      {
        id: "faq-57",
        question: "Do you serve every Tucson ZIP code?",
        answer: "Service may be available across many Tucson-area ZIP codes, but coverage depends on the exact property location, provider schedule, and property type. Visitors should enter the ZIP code and describe the problem before an appointment or response time is promised."
      },
      {
        id: "faq-58",
        question: "What information is needed to check service availability?",
        answer: "Provide the property ZIP code, phone number, property type, main symptoms, and whether water is actively spreading. The service coordinator can then confirm whether a provider covers the area and which type of detection or repair request is appropriate."
      },
      {
        id: "faq-59",
        question: "Does Tucson hard water cause slab leaks?",
        answer: "Hard water can contribute to mineral buildup in household plumbing, but it does not prove the cause of a slab leak. Pipe material, installation, pressure, age, movement, and previous repairs may also matter. The cause of a specific leak should be based on inspection rather than a general water-quality assumption."
      },
      {
        id: "faq-60",
        question: "Who is responsible for the water line after the meter?",
        answer: "Responsibility depends on the exact leak location and local utility rules. In many systems, the utility maintains the public main and meter area, while the property owner is responsible for private piping after the meter. The line should be located before responsibility is assigned."
      },
      {
        id: "faq-61",
        question: "Are Oro Valley and Catalina Foothills included?",
        answer: "These areas may be included when the assigned provider covers the property ZIP code. Do not promise universal coverage based only on the neighborhood name, because ZIP boundaries, travel distance, access, and scheduling can affect availability."
      },
      {
        id: "faq-62",
        question: "Why is the property ZIP code required?",
        answer: "The ZIP code helps match the request to the correct service area, estimate travel requirements, and avoid routing a lead to a provider who cannot serve the property. Use the ZIP code where the leak is located, not a separate mailing or billing address."
      },
      {
        id: "faq-63",
        question: "Can service be requested outside Tucson city limits?",
        answer: "Possibly. Nearby communities may be covered when a provider serves the area and the property is within a reasonable travel range. Submit the ZIP code first. The website should not claim an office or permanent crew in a community unless that location is genuine."
      }
    ]
  },
  {
    id: "slab-vs-foundation",
    title: "10. Slab Leak vs. Foundation Problems",
    iconName: "Home",
    faqs: [
      {
        id: "faq-64",
        question: "What is the difference between a slab leak and a foundation problem?",
        answer: "A slab leak is a plumbing failure in a water line beneath or within the concrete slab. A foundation problem involves movement, settlement, cracking, or structural support. The terms sound similar, but the services are different: plumbers repair slab leaks, while foundation specialists address structural concerns."
      },
      {
        id: "faq-65",
        question: "Do cracks in the floor or wall prove there is a slab leak?",
        answer: "No. Cracks can result from normal movement, settlement, temperature changes, moisture, or structural issues. A slab leak becomes more likely when cracks appear with meter movement, warm flooring, running-water sounds, or unexplained water use. Plumbing and structural assessments may both be needed."
      },
      {
        id: "faq-66",
        question: "Can foundation movement damage an under-slab water line?",
        answer: "It can place stress on rigid piping, joints, or penetrations, but movement is only one possible cause. Installation defects, corrosion, pressure, abrasion, or pipe age may also contribute. The plumber should repair the water line, while a structural professional evaluates ongoing foundation movement."
      },
      {
        id: "faq-67",
        question: "Should I call a plumber or a foundation contractor first?",
        answer: "Call a plumber first when the meter moves, the floor is warm or damp, water can be heard, or household water use has increased. Call a foundation professional when the main concern is structural cracking or movement without evidence of water loss. When both sets of signs are present, both assessments may be appropriate."
      },
      {
        id: "faq-68",
        question: "Does water outside the foundation always mean a slab leak?",
        answer: "No. Exterior water can come from irrigation, drainage, roof runoff, pool systems, a service-line leak, or plumbing beneath the slab. Turn off irrigation and other outdoor water uses, observe the meter, and inspect the area before assuming the source is an interior slab line."
      },
      {
        id: "faq-69",
        question: "Can pressure testing distinguish plumbing loss from structural damage?",
        answer: "Pressure testing can show whether a closed water line loses pressure. That supports a plumbing diagnosis, but it does not evaluate structural movement. Foundation cracks require a separate structural assessment. The tests answer different questions and should not be used interchangeably."
      },
      {
        id: "faq-70",
        question: "What happens if both a slab leak and foundation issue are present?",
        answer: "First control the active water loss to limit additional damage. The plumber locates and repairs or reroutes the pipe, while a foundation professional evaluates movement and structural repair needs. Coordination matters because the plumbing route, floor access, and structural plan can affect one another."
      }
    ]
  }
];
