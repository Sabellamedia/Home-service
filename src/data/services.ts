export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  fullDescription: string;
  icon: string;
  features: string[];
  metaTitle: string;
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: 'handyman',
    title: 'Handyman Services',
    shortTitle: 'Handyman',
    description: 'Professional general repairs and installations throughout Jacksonville, FL. From fixing leaky faucets to mounting TVs, we handle it all.',
    fullDescription: `When something breaks or needs installation in your Jacksonville home, APR Handyman is the name neighbors trust. Our handyman services cover the full spectrum of home repairs and improvements that don't require a licensed specialty contractor — which means we can tackle your growing to-do list in a single visit, saving you time and money.

Our team brings German precision and over 20 years of hands-on experience to every job. Whether you need a ceiling fan installed, a squeaky door fixed, drywall patched, or a TV securely mounted above your fireplace, we approach every task with the same level of care and attention to detail. No job is too small, and no shortcut is ever taken.

Jacksonville homeowners frequently call us for tasks including but not limited to: door and window repair or replacement, fixture installation (lighting, ceiling fans, bathroom hardware), TV mounting and cable management, furniture assembly, drywall repair and patching, weatherstripping and door sweep replacement, lock installation and re-keying, caulking and sealing around windows and doors, and general carpentry touch-ups throughout the home.

What sets APR Handyman apart from calling a random handyman near Jacksonville is our commitment to transparency. Before we start any work, we walk you through exactly what needs to be done and why. We provide upfront pricing and always clean up completely when we're done. Our clients in Ponte Vedra, Riverside, San Marco, and across the greater Jacksonville area consistently remark that we treat their homes as if they were our own. Book your free estimate today and experience the APR difference.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" /></svg>`,
    features: [
      'Door & window repair and installation',
      'TV mounting & cable management',
      'Ceiling fan & light fixture installation',
      'Drywall repair & patching',
      'Furniture assembly',
      'Lock installation & hardware',
      'Weatherstripping & door sweeps',
      'General home repairs',
    ],
    metaTitle: 'Handyman Services Jacksonville FL | APR Handyman',
    metaDescription: 'Professional handyman services in Jacksonville, FL. TV mounting, door repair, fixture installation & more. 20+ years experience. Call (904) 532-6383 for a free estimate.',
  },
  {
    slug: 'maintenance',
    title: 'Maintenance Services',
    shortTitle: 'Maintenance',
    description: 'Keep your Jacksonville home in peak condition year-round with our comprehensive maintenance services.',
    fullDescription: `Preventive maintenance is the smartest investment a Jacksonville homeowner can make. Florida's hot summers, hurricane season, and occasional cold snaps put unique stress on your home — and catching small problems early prevents them from becoming expensive disasters. APR Handyman offers comprehensive home maintenance services designed to keep your property in peak condition throughout the year.

Our seasonal maintenance packages are tailored specifically for Northeast Florida's climate. In spring, we focus on post-winter inspection, gutter cleaning, and preparing your exterior for the humid summer ahead. Before hurricane season, we check and reinforce roof attachments, inspect caulking around windows and doors, and ensure your drainage systems are clear and functional. Fall maintenance includes weatherproofing, caulk and sealant refresh, and getting your HVAC surroundings in order for cooler months.

Specific maintenance services we provide in Jacksonville and surrounding communities include: gutter cleaning and downspout flushing, window and door caulking and re-caulking, weatherproofing and weatherstripping replacement, pressure washing of driveways, walkways, and exterior surfaces, wood rot inspection and minor repair, exterior paint touch-ups, attic hatch and crawl space access inspection, HVAC filter change and vent cleaning, and whole-house walk-through inspections.

Many Jacksonville homeowners set up recurring maintenance visits with APR Handyman — quarterly, semi-annually, or annually — so they never have to think about what needs attention. We keep detailed notes on your home's condition across visits, letting us catch developing issues before they escalate. Contact us to build a custom maintenance plan for your home in Fleming Island, Orange Park, Mandarin, or anywhere across the Jacksonville metro area.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>`,
    features: [
      'Gutter cleaning & downspout flushing',
      'Seasonal home inspections',
      'Caulking & weatherproofing',
      'Pressure washing',
      'Wood rot inspection & repair',
      'HVAC filter & vent service',
      'Pre-hurricane season prep',
      'Recurring maintenance plans',
    ],
    metaTitle: 'Home Maintenance Services Jacksonville FL | APR Handyman',
    metaDescription: 'Comprehensive home maintenance in Jacksonville, FL. Gutter cleaning, weatherproofing, seasonal inspections & more. Keep your home in peak condition. (904) 532-6383.',
  },
  {
    slug: 'painting',
    title: 'Painting Services',
    shortTitle: 'Painting',
    description: 'Interior and exterior painting services in Jacksonville, FL. Flawless prep, premium paints, and meticulous attention to detail.',
    fullDescription: `A fresh coat of paint is one of the most transformative improvements you can make to your Jacksonville home — and the quality of that transformation depends entirely on preparation and technique. APR Handyman's painting services deliver professional results that stand the test of time, using premium materials and the kind of meticulous prep work that most painting crews skip.

Our interior painting services cover every room in your home, from ceilings and walls to trim, doors, and cabinetry. Before we apply a single stroke of paint, our team thoroughly prepares each surface: filling nail holes and cracks, sanding rough areas, masking off trim and fixtures, and applying primer where needed. We use low-VOC and zero-VOC paints from top brands including Sherwin-Williams and Benjamin Moore, protecting your family's indoor air quality while delivering rich, lasting color.

For exterior painting in Jacksonville's demanding climate, surface preparation is even more critical. We power wash all exterior surfaces, scrape and sand any peeling areas, treat bare wood with primer, and apply high-quality exterior coatings engineered to withstand Florida's UV intensity, humidity, and tropical rain. We also handle soffit, fascia, shutters, and trim painting to give your home a cohesive, polished look.

Not sure what color to choose? Our team offers color consultation services to help you select shades that complement your home's architecture, neighborhood aesthetic, and your personal style. We bring color samples to your home so you can see exactly how they'll look in your own lighting before committing. From single-room refreshes to whole-house repaints, APR Handyman delivers flawless painting results across Jacksonville, Ponte Vedra, Atlantic Beach, Neptune Beach, and all surrounding communities.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>`,
    features: [
      'Interior painting (walls, ceilings, trim)',
      'Exterior painting & weatherproofing',
      'Cabinet painting & refinishing',
      'Thorough surface prep & priming',
      'Color consultation',
      'Low-VOC & zero-VOC paint options',
      'Deck & fence staining',
      'Fascia, soffit & shutter painting',
    ],
    metaTitle: 'Painting Services Jacksonville FL | Interior & Exterior | APR Handyman',
    metaDescription: 'Professional interior & exterior painting in Jacksonville, FL. Premium paints, meticulous prep, flawless results. Free estimates. Call APR Handyman: (904) 532-6383.',
  },
  {
    slug: 'patio-deck',
    title: 'Patio & Deck Maintenance',
    shortTitle: 'Patio & Deck',
    description: 'Expert deck repair, staining, sealing, and pressure washing in Jacksonville, FL. Restore and protect your outdoor living space.',
    fullDescription: `Jacksonville's outdoor lifestyle demands outdoor spaces that can stand up to year-round use and the elements. Your deck or patio represents a significant investment in your home's value and livability — and regular professional maintenance is the key to protecting that investment. APR Handyman provides comprehensive patio and deck maintenance services that keep your outdoor spaces safe, beautiful, and built to last.

Deck maintenance begins with a thorough inspection. Our team checks every board for rot, soft spots, and structural weakness; examines ledger boards and post connections for stability; and identifies any fastener issues that could become safety hazards. We handle deck board replacement for damaged or rotted sections, re-secure loose boards and railings, replace failing fasteners with stainless steel alternatives, and address any structural concerns before they become dangerous.

Once structural integrity is confirmed, we move to the cosmetic restoration phase. Pressure washing removes years of grime, algae, mildew, and old sealant from deck surfaces, revealing the natural wood beneath. After proper drying time — critical in Jacksonville's humidity — we apply professional-grade stain, sealant, or paint systems formulated specifically for exterior wood in Florida's climate. These coatings protect against UV fading, moisture penetration, and the mold and mildew that thrive in our subtropical environment.

For concrete and paver patios, we provide pressure washing, concrete crack repair, re-sanding of paver joints, and sealing services that restore appearance and prevent future damage. We also handle pergola and screen enclosure repair, outdoor furniture touch-ups, and landscape border and edging work. Whether your deck needs a complete restoration or just an annual maintenance treatment, APR Handyman serves homeowners throughout Jacksonville, Fleming Island, Mandarin, and Orange Park.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>`,
    features: [
      'Deck board replacement & repair',
      'Structural inspection & reinforcement',
      'Pressure washing & cleaning',
      'Staining, sealing & painting',
      'Railing repair & replacement',
      'Paver patio repair & re-sanding',
      'Pergola & screen enclosure repair',
      'Deck restoration & refinishing',
    ],
    metaTitle: 'Patio & Deck Maintenance Jacksonville FL | APR Handyman',
    metaDescription: 'Expert deck repair, staining & pressure washing in Jacksonville, FL. Restore your outdoor space. Licensed & insured. Free estimates. Call (904) 532-6383.',
  },
  {
    slug: 'remodeling',
    title: 'Remodeling Services',
    shortTitle: 'Remodeling',
    description: 'Complete kitchen, bathroom, and home remodeling in Jacksonville, FL. Transform your living spaces with expert craftsmanship.',
    fullDescription: `Remodeling your Jacksonville home is one of the most significant investments you can make — and it deserves a contractor who combines professional expertise with genuine care for the outcome. APR Handyman's owner Tolga Gürsoy brings over 20 years of remodeling experience from Germany and the United States, delivering the precision craftsmanship and project management discipline that turns renovation visions into reality.

Our kitchen remodeling services encompass everything from cabinet installation and countertop replacement to full kitchen redesigns. We handle cabinet removal and installation, countertop fitting (tile, laminate, and solid surface), backsplash installation, under-cabinet lighting, appliance installation, and all the finishing details that make a kitchen feel truly complete. We work with your chosen materials or help you source quality options that fit your budget and style.

Bathroom remodeling is another specialty, and Jacksonville homeowners consistently choose APR Handyman for these projects because of our attention to detail and honest timeline management. We handle full bathroom gut-and-rebuilds as well as targeted updates: replacing dated tile, installing new vanities, upgrading shower surrounds, replacing tub enclosures, improving ventilation, and adding accessibility features like grab bars and walk-in shower conversions.

Beyond kitchens and bathrooms, we provide whole-room remodels, basement finishing, home office conversions, laundry room upgrades, and additions coordination. Every remodeling project begins with a detailed consultation where we listen carefully to your goals, assess existing conditions, and provide a transparent scope of work and timeline. We believe surprises on a remodeling project are almost always avoidable with proper planning — and we plan properly. Serving Jacksonville, Ponte Vedra, San Marco, Riverside, and all surrounding communities in Duval and Clay counties.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>`,
    features: [
      'Kitchen remodeling & cabinet installation',
      'Countertop & backsplash installation',
      'Full bathroom renovations',
      'Tile installation (floor & wall)',
      'Basement finishing',
      'Home office conversions',
      'Laundry room upgrades',
      'Whole-room transformations',
    ],
    metaTitle: 'Remodeling Services Jacksonville FL | Kitchen & Bathroom | APR Handyman',
    metaDescription: 'Expert home remodeling in Jacksonville, FL. Kitchen remodels, bathroom renovations, basement finishing & more. 20+ years experience. Free estimate: (904) 532-6383.',
  },
  {
    slug: 'exterior',
    title: 'Exterior Services',
    shortTitle: 'Exterior',
    description: 'Complete exterior home services in Jacksonville, FL. Siding, fascia, soffit, power washing, and curb appeal improvements.',
    fullDescription: `Your home's exterior is its first impression — and in Jacksonville's competitive real estate market, curb appeal matters. APR Handyman provides comprehensive exterior services that protect your home from the elements, address damage before it spreads, and enhance the appearance that welcomes you home every day.

Siding repair and replacement is one of our most requested exterior services in Jacksonville. Florida's combination of UV exposure, humidity, and storm impacts is hard on vinyl, wood, and fiber cement siding alike. We repair cracked, warped, or missing siding sections with precision color-matching to existing material, and provide full siding replacement projects when damage is extensive. We also handle the trim work that frames your siding — window casing, corner trim, and band board — ensuring everything looks intentional and tight.

Fascia and soffit work is essential for protecting your roofline and attic from water intrusion and pest entry. Damaged or rotted fascia boards are a common finding in Jacksonville homes, especially those with mature trees and significant rainfall exposure. Our team replaces rotted fascia sections, repairs or replaces damaged soffit panels, and ensures proper venting to prevent moisture buildup in your attic space. We finish with paint that matches your existing trim colors for a seamless result.

Power washing transforms the appearance of Jacksonville homes, driveways, walkways, fences, and retaining walls. Our professional equipment removes years of organic growth, mildew staining, and weathering from virtually any exterior surface. Combine power washing with our painting and sealing services for a complete exterior refresh that dramatically boosts your home's curb appeal and market value. We serve all of Jacksonville's neighborhoods including Southside, San Marco, Atlantic Beach, Neptune Beach, and the greater St. Johns County area.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" /></svg>`,
    features: [
      'Siding repair & replacement',
      'Fascia & soffit repair',
      'Window & door trim work',
      'Power washing & soft washing',
      'Wood rot repair',
      'Caulking & sealing',
      'Curb appeal improvements',
      'Storm damage repair',
    ],
    metaTitle: 'Exterior Home Services Jacksonville FL | Siding, Fascia, Soffit | APR Handyman',
    metaDescription: 'Professional exterior services in Jacksonville, FL. Siding repair, fascia & soffit, power washing & more. Boost your home\'s curb appeal. Call (904) 532-6383.',
  },
  {
    slug: 'carpentry',
    title: 'Carpentry Services',
    shortTitle: 'Carpentry',
    description: 'Custom carpentry and woodworking in Jacksonville, FL. Trim work, built-ins, shelving, doors, and decorative woodwork.',
    fullDescription: `Fine carpentry is where craftsmanship truly shows. APR Handyman's carpentry services reflect owner Tolga Gürsoy's German woodworking tradition — a culture that has long prized precision joinery, careful material selection, and finishes that honor the natural beauty of wood. Whether you need decorative trim work, custom built-ins, or structural carpentry, our team delivers results that elevate your Jacksonville home.

Trim and millwork installation transforms the feel of any room. We install and replace crown molding, baseboards, door and window casings, chair rail, wainscoting, coffered ceiling frames, and decorative wall paneling. Proper trim installation requires patience, precision cuts, and an understanding of how wood moves with temperature and humidity changes — especially important in Jacksonville's climate. Our trim joints are tight, our profiles are consistent, and our finishes are flawless.

Custom carpentry is a particular strength. We build custom shelving systems for living rooms, bedrooms, and home offices — from simple floating shelves to floor-to-ceiling built-in bookcases with adjustable shelves, cabinets, and integrated lighting. We also design and build mudroom lockers, window seats with storage, under-stair storage solutions, and closet organization systems. These custom pieces are designed to fit your specific space and built to last a lifetime.

Door installation and repair rounds out our carpentry offering. We hang new interior and exterior doors, repair or replace door frames damaged by water or impact, install barn door hardware and track systems, and address the common Florida problem of doors that stick or don't latch properly due to humidity-related swelling. From Riverside bungalows to Ponte Vedra estate homes, APR Handyman's carpentry team crafts wood features that clients are proud to show off for years to come.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>`,
    features: [
      'Crown molding & trim installation',
      'Custom built-in shelving & cabinetry',
      'Wainscoting & wall paneling',
      'Door installation & repair',
      'Barn door hardware installation',
      'Window seat & storage bench builds',
      'Deck framing & structural carpentry',
      'Custom woodworking projects',
    ],
    metaTitle: 'Carpentry Services Jacksonville FL | Custom Woodwork & Trim | APR Handyman',
    metaDescription: 'Expert carpentry in Jacksonville, FL. Custom built-ins, trim work, door installation & more. German precision craftsmanship. Free estimates. Call (904) 532-6383.',
  },
  {
    slug: 'bathroom',
    title: 'Bathroom Services',
    shortTitle: 'Bathroom',
    description: 'Full bathroom renovations and repairs in Jacksonville, FL. Tile, vanity, shower, and plumbing fixture installation.',
    fullDescription: `The bathroom is one of the most-used — and most scrutinized — rooms in your home. An outdated or deteriorating bathroom affects daily quality of life and significantly impacts your home's resale value. APR Handyman provides complete bathroom services in Jacksonville, from targeted upgrades and repairs to full gut-and-rebuild renovations, all executed with the precision and care that our clients expect.

Our most comprehensive bathroom service is the full renovation. Starting from bare walls, we coordinate all aspects of a bathroom transformation: waterproofing the shower and tub surround, installing cement board and tile backer, setting and grouting floor and wall tile, building and finishing shower niches and benches, installing vanities, sinks, faucets, towel bars, and accessories, hanging mirrors and medicine cabinets, and ensuring every detail is perfectly executed. We work from a detailed scope of work agreed upon before any tile is cracked, so there are no surprises.

Tile work is a specialty unto itself, and our tile installation stands apart from typical contractor work. We understand proper layout and centering, we cut tiles cleanly and accurately, and we apply grout consistently with proper spacing and depth. From classic subway tile to large-format porcelain to intricate mosaic accents, our team handles any tile pattern with the precision it requires. Properly installed tile with correct waterproofing protects your investment for decades.

For bathrooms that don't need a full renovation, we offer targeted improvements that deliver significant impact: vanity replacement and plumbing fixture upgrades, toilet replacement (standard and comfort-height), shower door and enclosure replacement, reglazing of tubs and tile, exhaust fan installation and upgrade, and accessibility modifications including grab bars, comfort-height fixtures, and roll-in shower conversions. Jacksonville and Northeast Florida homeowners choose APR Handyman for bathroom work because our results look like they belong in a design magazine — and they last just as long.`,
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>`,
    features: [
      'Full bathroom renovations',
      'Tile installation (floor & walls)',
      'Vanity & sink installation',
      'Shower & tub enclosure replacement',
      'Plumbing fixture upgrades',
      'Toilet replacement',
      'Exhaust fan installation',
      'Accessibility modifications',
    ],
    metaTitle: 'Bathroom Services Jacksonville FL | Renovations & Repairs | APR Handyman',
    metaDescription: 'Expert bathroom renovations in Jacksonville, FL. Tile, vanity, shower, plumbing fixtures & full gut remodels. Quality you can see. Call (904) 532-6383.',
  },
];
