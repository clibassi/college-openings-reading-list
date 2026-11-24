# Lehnert, Dell, Backes-Gellner, & Bettinger (2024)

> Model-written summary (2026-11-24) of the paper's PDF: IZA Discussion Paper No. 17059, June 2024 (the NBER working paper number 32679 does not appear in this text). Not checked against the paper by a person.

## File Name
LehnertDellBackesGellnerBettinger_PostsecondaryInstitutionsLocalEconomies_2024.pdf

## Paper Title
The Effect of Postsecondary Educational Institutions on Local Economies: A Bird's-Eye View

## Basic Information
- Authors: Patrick Lehnert, Madison Dell, Uschi Backes-Gellner, & Eric Bettinger
- Year: 2024
- Journal: IZA Discussion Paper No. 17059 (June 2024); not a journal article in this version
- Field: Economics of education and regional economics (JEL I23, I25, I26, R12)
- Subfield: Local economic effects of higher education expansion; branch campuses; satellite-based measurement
- Study type: Quasi-experimental panel study (two-way fixed effects DD, heterogeneity-robust DD, and instrumental variables) on census-tract data

## Objective and Contribution (100-150 words)
The paper asks whether opening a postsecondary branch campus raises local economic activity, a question the authors say lacks evidence because data at a fine enough geography and long enough horizon are scarce (pp. 4–5). They study branch campus openings after 1984 in Tennessee (69 openings) and Texas (65 openings) (Table 1, p. 16). The contributions are fourfold. They hand-collect opening dates and locations of branch campuses, which administrative data do not record (p. 11). They build a census-tract-level, annual proxy for GDP from daytime satellite land-cover imagery back to 1984 (pp. 12–14). They estimate effects with three methods, including an instrument for Texas based on community college taxing districts (pp. 17–20). Finally, they offer suggestive mechanism evidence on degrees and employment (p. 34).

## Methodology (200-300 words)
- **Data.** Branch campus opening dates and locations (Tennessee from state agencies; Texas from a state list plus web search and phone survey) and a tract-level proxy for GDP, 1984–2020 (p. 11). The proxy trains an OLS model of county log GDP (BEA, 2001–2020) on six standardized log land-cover pixel counts, then applies the coefficients to census tracts, assuming the same relationship at tract level (pp. 13–14). It explains 58.8 percent (adjusted R-squared) of county GDP variation nationally (Table A1, p. 41).
- **Design.** Treated tracts lie within 25 miles of an opened campus; the indicator turns on four years after opening, to allow the first cohort to graduate (Eq. 2, p. 15). Radii of 10 and 40 miles are robustness checks (p. 14).
- **Identifying assumption.** For DD, parallel trends conditional on tract and year fixed effects. For IV, the instruments affect siting independent of economic development (p. 22).
- **Estimation.** Baseline DD
$$\hat{Y}_{it} = \alpha + \beta\,BranchCampusOpen_{it-4} + \gamma_i + \delta_t + \epsilon_{it}$$
where $\hat{Y}_{it}$ is predicted standardized log GDP in tract $i$, year $t$; $\gamma_i$ tract fixed effects; $\delta_t$ year fixed effects (Eq. 2, p. 15; the Greek letters are partly lost in the text dump, so symbol names are my reconstruction). Second, the Callaway & Sant'Anna (2021) estimator (CS-DD). Third, an IV for Texas using log distance from a tract to the closest branch campus outside its catchment (lagged nine years) and its interaction with a county taxing-district dummy (p. 18).
- **Inference.** Standard errors clustered at the tract (pp. 15–17).
- **Threats.** Endogenous siting; outcome proxy tied to built-up land; spillovers into controls; IV exclusion; heavy treated share (87.1 percent of Tennessee tracts) (Table 1).

## Sample and Setting (150-200 words)
Tennessee and Texas, 1984–2020, chosen because they bracket U.S. patterns: fall public enrollment grew 42.3 percent in Tennessee and 110.5 percent in Texas, and public branch campuses rose from 35 to 104 (197.1%) and from 71 to 136 (91.5%) (pp. 5–7). Tennessee is densely populated with short travel times; Texas is sparse with long ones (p. 5). Branch campuses are geographically separate and offer two- or four-year programs; special-purpose sites such as high schools and prisons are excluded (p. 5). Under the 25-mile radius, the Tennessee sample has 69 openings, 1,701 census tracts, 62,630 tract-years, and 1,481 treated tracts (87.1%); Texas has 65 openings, 6,875 tracts, 251,680 tract-years, and 4,536 treated tracts (66.0%) (Table 1, p. 16). Of the openings, 59 of 69 are two-year in Tennessee, and 26 two-year and 39 four-year in Texas (Table A5, p. 45). Cloud-cover and misclassification exclusions leave 99.5 percent and 98.8 percent of potential tract observations (p. 13). The radius corresponds to mean one-way commutes of 25.4 minutes (Tennessee) and 26.6 minutes (Texas) (p. 14).

## Main Findings (200-300 words)
**Baseline effects are positive in all estimators.** With the 25-mile radius, DD coefficients are 0.039 (Tennessee) and 0.160 (Texas); CS-DD 0.035 and 0.141; IV for Texas 0.361 (standard error 0.119) (Table 2, p. 23). Units are standard deviations of predicted log GDP.

**GDP translation.** The authors convert these to GDP using two assumptions (uniform activity versus activity proportional to built-up area). DD gives 1.4 to 3.3 percent for Tennessee and 5.8 to 14.1 percent for Texas; CS-DD gives 1.2 (2.9) percent and 5.0 (12.4) percent; IV for Texas gives 13.4 (34.9) percent (pp. 22–23).

**Radius and donuts.** Texas results hold at 10 miles (smaller) and 40 miles, except the IV, which is insignificant at both 10 miles (0.362, SE 0.253) and 40 miles (–0.072, SE 0.136) (Table 3, p. 27). Tennessee CS-DD at 10 miles is –0.016, significant at 10 percent. Outer and inner donut estimates match the baseline (Table 4, p. 29).

**Campus type.** In Texas both two-year (0.052) and four-year (0.133) campuses are positive; in Tennessee only two-year (0.049) is, with four-year at –0.003 (Table 5, p. 32).

**Dynamics.** The text reports flat pre-trends and effects that grow over time, with a lag of about five years in Tennessee (p. 31).

**Mechanisms.** ACS 2009–2020 shows roughly 7 to 8 percent more people with some college or higher, associate, or bachelor's degrees in Tennessee (CS-DD) and roughly 5 to 7 percent in Texas. Health and education employment is inconclusive: CS-DD is –0.099 in Tennessee and 0.031 (insignificant) in Texas (Table 6, p. 36).

## Key Figures and Tables
**Table 1 — Branch Campus Openings, Treated Census Tracts, and Treated Observations in Tennessee and Texas, 1984–2020.** Gives 69 Tennessee and 65 Texas openings and shows that 87.1 percent of Tennessee tracts are treated at some point. The text says 40.0 percent of Tennessee observations are treated, while the table prints 40.1 percent. (p. 16)

**Table 2 — Estimates of Branch Campus Effect on Economic Activity in Tennessee and Texas, 1984–2020.** Core results for DD, CS-DD and IV (0.039, 0.035; 0.160, 0.141, 0.361). All are significant at the 1 percent level; IV is more than twice the CS-DD estimate, read as a complier effect. (p. 23)

**Table 3 — Estimates of Branch Campus Effect on Economic Activity in Tennessee and Texas, 1984–2020, 10-Mile and 40-Mile Treatment Radii.** Texas IV is insignificant at both radii; Tennessee DD at 10 miles is 0.003. The authors attribute the Tennessee result to control tracts being treated at small radii. (The second panel is mislabeled "Panel A" in the printed table.) (p. 27)

**Table 4 — Donut Estimates of Branch Campus Effect on Economic Activity in Tennessee and Texas, 1984–2020.** Excluding tracts 25–40 miles away, or the campus tract itself, leaves estimates close to Table 2 (e.g., Texas DD 0.156 and 0.160). This addresses zero-sum reallocation and the pure-construction concern. (p. 29)

**Table 5 — DD Estimates of Two-Year and Four-Year Branch Campus Effect on Economic Activity in Tennessee and Texas, 1984–2020.** Separate indicators show two-year campuses drive Tennessee and both types matter in Texas. Tennessee has only ten four-year openings, so power is limited. (p. 32)

**Table 6 — Estimates of Branch Campus Effect on Educational Attainment and Employment in Education and Health in Tennessee and Texas, 2009–2020.** Attainment rises under DD and CS-DD; health and education employment is not robust to CS-DD. Outcomes use the inverse hyperbolic sine. (p. 36)

**Figure 1 — Growth in Fall Enrollment and Number of College Campuses in Tennessee and Texas, 1984–2020.** Shows enrollment, branch campuses and main campuses indexed to 1986; Tennessee branch growth outpaced enrollment, the authors' explanation for smaller Tennessee effects. Index values are not legible in the dump. (p. 6)

**Figure 2 — Texas Community College Taxing Districts.** Map of districts with taxing authority, covering about 30 percent of counties; the source of instrument variation. The map is not legible in the dump. (p. 19)

**Figure 3 — Hypothetical College Branch Campus Locations as Example for IV Logic.** Illustrates why distance to out-of-catchment competitors matters less for sites inside a taxing district. (p. 21)

**Figure 4 — Event-Study Plot for CS-DD Estimates of Branch Campus Effect on Economic Activity in Tennessee and Texas, 1984–2020.** Event time of ±10 years; the text reports flat pre-trends and rising post-effects. Coefficients are not legible in the dump. (p. 33)

**Table A4 — First-Stage IV Estimates.** Instrument F-statistic is 32.921 for the baseline; the distance-times-taxing-district coefficient is –0.105 (SE 0.014). (p. 44)

## Critical Analysis (300-400 words)
The descriptive claim, that tracts near new branch campuses saw more growth in a predicted-GDP proxy, is well supported across specifications. The causal claim is weaker than the abstract's tone suggests. The DD rests on parallel trends in a setting where siting is explicitly endogenous (p. 7), and the paper's own explanation for larger Texas coefficients is that openings respond to population growth (p. 20). The reported flat pre-trends (p. 31) help, but I cannot assess them because the plot is not legible, and a flat pre-period does not rule out growth-anticipating siting.

The outcome is the largest concern. The proxy is a regression of county GDP on land-cover pixel counts, dominated by built-up area (coefficient 1.398 on log built-up, Table A1, p. 41). It is therefore partly a measure of construction and land conversion, which any new campus, housing or retail development raises mechanically. The inner donut (Table 4) removes the campus tract but not nearby development that follows the campus. Applying county-level coefficients to tracts is an untested assumption (p. 14). Translating coefficients into GDP percentages uses two ad hoc allocation rules, and comparing a cumulative effect to a mean annual growth rate of 4.9 percent (p. 23) mixes units.

The IV is the most interesting design but is fragile. Taxing districts are time-invariant (absorbed by tract fixed effects) and entered only through an interaction with distance. The exclusion restriction requires that distance to out-of-catchment campuses, differentially in taxing counties, affects growth only through siting. The IV is insignificant at 10 and 40 miles (Table 3). Tract-clustered errors with overlapping 25-mile treatment areas probably understate spatial correlation (my judgment; not discussed).

Transfer to a study of two-year college openings and firms, industry mix and innovation: the treatment is close to your setting (59 of 69 Tennessee openings are two-year), and the 25-mile radius with a lagged treatment indicator and CS-DD is directly reusable. But the paper has no firm, establishment, industry-mix or patent outcome; the only sectoral evidence is health and education employment, which is inconclusive. A study with establishment or inventor microdata could address the proxy and mechanism limits here.

## Research Gaps and Future Directions
- Extend to more states or other countries for external validity (p. 36).
- Obtain campus-level data on enrollment, graduates, programs, faculty and resources, which cannot currently be separated between branch and parent campuses (p. 36).
- Not addressed in this version: firm entry, industry composition and innovation outcomes; a second valid instrument for Tennessee; separate IV for two-year versus four-year campuses (footnote 25, p. 31).

## Implications and Future Research (100-150 words)
The paper is a useful template for place-based evaluation of campus openings where official data are too coarse: stack openings at fine geography, use a conservative lag, check radii, and run donut specifications. Its estimates suggest positive local growth after openings, with larger effects in Texas than Tennessee and an explicit warning that effects can be diluted when campus growth outpaces enrollment (p. 36). For research on community and technical colleges, the key next step is replacing the satellite proxy with outcomes measured directly, such as establishment counts, employment by industry, and patents, and testing whether the human capital channel (graduate counts) shows up in the sectors that campuses train for. The mixed mechanism evidence on employment (Table 6) indicates that this channel is not yet established.

## Keywords/Tags
#branch-campuses #community-colleges #satellite-imagery #local-economic-growth #difference-in-differences #instrumental-variables #staggered-adoption #tennessee-texas #jel-i23 #jel-r12

## Related Papers
[[Andrews (2023)]] Cited by the paper as the U.S. study of college establishment and local invention (footnote 2, p. 4); it measures innovation where this paper measures a GDP proxy.
[[Schlegel, Pfister, Harhoff, & Backes-Gellner (2022)]] Cited under firm development effects of higher education expansions (footnote 2, p. 4); this paper notes such non-U.S. findings are hard to generalize to U.S. branch campuses.
[[Pfister, Koomen, Harhoff, & Backes-Gellner (2021)]] Cited under innovation and patenting effects of higher education expansions (footnote 2, p. 4), part of the non-U.S. evidence the authors say may not transfer to teaching-focused branch campuses.
[[Bleemer & Quincy (2026)]] Studies junior colleges and local development, the closest two-year-college counterpart in the corpus.
[[Kantor & Whalley (2014)]] Cited as a study of research universities in U.S. urban regions (footnote 3, p. 4), the contrast case to teaching-focused branch campuses.
