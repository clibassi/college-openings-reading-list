# Hausman (2022)

> Model-written summary (2026-11-24) of the paper's PDF: published version, The Review of Economics and Statistics, July 2022, 104(4): 718–735 (received 10 July 2019, accepted 22 July 2020; the online appendix tables A1–A7 and figures A1–A3 are not in this PDF). Not checked against the paper by a person.

## File Name
Hausman_UniversityInnovationLocalGrowth_2022.pdf

## Paper Title
University Innovation and Local Economic Growth

## Basic Information
- Authors: Naomi Hausman
- Year: 2022
- Journal: The Review of Economics and Statistics 104(4), 718–735
- Field: Urban and regional economics; economics of innovation
- Subfield: University knowledge spillovers; industry agglomeration; technology transfer policy
- Study type: Quasi-experimental (policy shock interacted with continuous cross-sectional exposure; difference-in-differences style event study)

## Objective and Contribution (100-150 words)
The paper asks whether knowledge from U.S. universities drives local industry agglomeration (abstract, p. 1). It uses the 1980 Bayh-Dole Act, and the 1984 Trademark Clarification Act, as a national shock to the spread of university ideas to industry, and interacts it with a county-industry innovation index measuring how technologically related each industry is to the nearby university's pre-1980 patents (pp. 1–2). The contribution is a new way to link university innovation to specific local industries, which lets the specification absorb county-level shocks with county-by-year fixed effects (p. 2, p. 13). The paper also traces mechanisms: proximity, density, skills, federal funding, firm entry and multiunit expansion, and university R&D relationships from linked Census survey data (pp. 8–16). Policy relevance covers IP regimes and place-based development.

## Methodology (200-300 words)
**Data.** Census Bureau Longitudinal Business Database (LBD), 1977–1997, balanced at county-SIC3 industry-year (22,650,000 observations, rounded, Table 1); NBER Patent Data for university and corporate patents; NSF federal research funding by agency and campus (five-year average 1976–1980); a probabilistic patent-class-to-industry concordance following Kerr (2008); BRDIS survey data linked to LBD for mechanisms (pp. 5–6, p. 15).

**Design.** Outcomes $y_{cit}$ for county $c$, industry $i$, year $t$ are regressed on

$$y_{cit} = \beta_0 + \beta_1\, index_{ci} \times I_{t>1980} + \phi_{it} + \psi_{ct} + \pi_{ci} + \epsilon_{cit}$$

(Eq. 1), where $index_{ci}$ is the standardized innovation index, $I_{t>1980}$ a post indicator, and $\phi_{it}$, $\psi_{ct}$, $\pi_{ci}$ are industry-by-year, county-by-year and county-by-industry fixed effects. The index is $index_{ci}=\sum_{u\in c}\sum_n w_{in}\, p_{un}$ (Eq. 4), with $p_{un}$ the pre-1980 patents of university $u$ in technology class $n$ and $w_{in}$ the concordance weight. All counties within 75 miles of a university are treated (p. 5). Eq. 3 adds a triple interaction with pre-law federal funding.

**Identifying assumption.** Absent Bayh-Dole, high- and low-index industries within the same county would have grown in parallel, conditional on the fixed effects. The index uses only patents before December 1980 to keep it exogenous to post-law outcomes (p. 13).

**Estimation.** Linear fixed-effects regressions, with event-study versions replacing the post dummy with year interactions (Figs. 1–3), and a trend-break specification for corporate patents (p. 9).

**Inference.** Standard errors are clustered by county (Table 2 note).

**Threats.** Pre-trends, industries or universities specializing in fast-growing fields, endogenous federal funding, patent-based measurement of university strengths, and a 1984 follow-on law that muddies timing. Fixed effects absorb nationwide industry trends and county-wide shocks; leave-one-sector-out and state exclusions are used (pp. 12, 14).

## Sample and Setting (150-200 words)
The setting is the U.S. 1977–1997 around research universities. Before 1980 the federal government held default title to inventions from federally funded research, which were 64% to 69% of the total in 1972 to 1980; only 5% of 28,000 federally owned patents were licensed in 1976 (p. 3). Bayh-Dole (Public Law 96-517) was passed in December 1980 and effective July 1981, and the 1984 Trademark Clarification Act (PL 98-620) removed license exclusivity restrictions (p. 3). Many technology transfer offices opened in the mid-1980s and university patenting rose with the sharpest increase beginning in the late 1980s (p. 3). The unit is the county-industry. Treated places are counties within 75 miles of a university with patents; university counties number 1,700 of 3,200 counties in the county-level panel, with mean employment of 101.6 per county-industry-year versus 89.23 in the full sample (Table 1). Mean pre-law federal research funding in university counties is $160.52 million over five years, of which $62.67 million NIH and $16.55 million DOD (Table 1). Coverage is private nonfarm employer establishments only, so universities and hospitals as employers outside that frame are not covered, and the paper does not say how nonprofit hospitals are treated in this version.

## Main Findings (200–300 words)
**Related industries grew faster after Bayh-Dole.** Per standard deviation of the index, employment rises 18.14 workers per county-industry (SE 2.90), average establishment size 1.13, establishments 0.03, payroll $8.24 million, wage $4.48 thousand, and log wage 0.004 (Table 2). The paper equates this to 1.57 workers per citation-weighted patent (p. 2). Event studies show flat pre-law coefficients and divergence from 1984 (p. 7, Fig. 1).

**Effects are local and complement density and skills.** Treating only university-containing counties raises the employment coefficient to 40.49 from 18.14 (Table 3, panel A). Triple interactions with 1977 county employment, 1980 density and 1980 BA share are positive (e.g., 119.40, SE 43.82, for BA share; Table 3, panel B).

**Corporate innovation rises.** Corporate patenting in related technologies and university areas increases by 1.3% to 1.7% per standard deviation and the trend break is 0.09% to 0.13% (p. 9, Fig. 2; appendix tables not in this PDF).

**Federal funding amplifies.** Each additional $10 million of five-year funding is associated with nearly two more workers per county-industry (0.181 per $ million, Table 4, panel A); NIH funding implies 1.06 extra workers in the triple interaction (0.106; Table 4, panel B), but DOD is slightly negative (−0.094).

**Entry of multiunit firms drives growth.** Entrants explain 17.90 of the 18.14; multiunit expansions are 13.79 and single-unit entrants 4.11 (Table 5, row "All"). Incumbents are 0.24 in net but split between survivors (8.15) and deaths (−7.91) (p. 14).

**Mechanism evidence.** Post-1980 entrants in related industries more often report university R&D relationships (0.073) and large firms drive it (>1000 employees: 0.076; Table 6). Implied cost is $97,000 per worker versus $2.3 million from funding variation (p. 10).

## Key Figures and Tables
**Table 2 — Industry Growth Effects of University Innovation.** The main result: all six outcomes are positive and significant at 1% with all three two-way fixed effects. Employment is 18.14 and log wage 0.004 per standard deviation of the index (p. 7).

**Fig. 1 — Employment and Wage Effects by Year Relative to Bayh-Dole (LBD).** Event-study coefficients for employment and log wage, 1977–1997, with flat pre-period coefficients and divergence beginning around 1984 for employment and earlier for wages (pp. 7–8).

**Table 3 — Localized Knowledge Spillovers and Complements to University Innovation.** Shows that effects are larger when treatment is restricted to the university's own county (employment 40.49) and increase with county employment, density and BA share (p. 8).

**Table 4 — Federal Research Funding and Employment Growth.** Cross-county funding raises employment (0.181 total, 0.651 DOD, 0.443 NIH); panel B's triple interaction is positive for total and NIH funding and weakly negative for DOD (p. 10).

**Table 5 — Entrant and Incumbent Growth.** Decomposes the employment effect by incumbent versus entrant and by size; small establishments (1–25 employees at entry) account for 12.55 of 18.14, and most of that is multiunit expansion (9.03; p. 15).

**Table 6 — R&D Relationships with Universities among Pre- versus Post-1980 Entrants by Firm Size and IP Activity.** Post-1980 entrants in related industries show more university R&D ties and IP activity; pre-1980 entrants show none, a placebo-like contrast (p. 16).

## Critical Analysis (300–400 words)
**Identification.** The core comparison is within county and year, across industries differing in relatedness to the local university's 1980 patent portfolio, around a national policy shock. This design is strong against county-level confounders and against national industry trends, which is a real advance over cross-sectional university studies. The remaining assumption is that relatedness to the university's patent mix does not itself proxy for industry trajectories that are local and unobserved, such as complementary non-university R&D in the same county-industry. The pre-law event studies are mostly flat but noisy, and the paper concedes some significant pre-law points in the funding triple interaction (p. 13). The index is built from patents, and universities that patented little before 1980 may be mismeasured; the author reports a 90% correlation with a 1985-cutoff index (fn. 26).

**Causal interpretation.** The estimates are best read as the differential effect of a commercialization-regime change on related industries. Bayh-Dole is not a university opening, and it changed several things at once (licensing, consulting, spinouts, cultural norms), so "knowledge spillovers" are supported by the proximity, density and BRDIS patterns but not isolated. Since the specification absorbs county-wide effects, it cannot say anything about overall county growth; the author uses the funding results for that and notes they are less credible (p. 10). The reported cost per worker comparison ($97,000 versus $2.3 million) depends on calibrated production costs and should be treated as illustrative.

**Measurement and inference.** The LBD covers employer establishments, the big 1987 jump may reflect Economic Census years or reclassification (fn. 19), and the sample is balanced with zeros imputed for absent county-industries (fn. 17). Table 2's note describes column 5 as "log of 1 plus wage" while the column header for column 6 is "Log Wage", an apparent labeling inconsistency in this version.

**Transfer to community colleges.** The within-county, cross-industry exposure design transfers well: for a community college opening one could build an industry exposure measure from program offerings and interact it with opening timing, absorbing county-by-year shocks. The patent-based index does not transfer, since community colleges produce few patents, so the exposure would have to come from program fields or occupations; the finding that multiunit firm expansion drives the effect is a useful prior for firm outcomes. The paper's shock is national and simultaneous, whereas college openings are staggered, so two-way fixed effects would need modern difference-in-differences care.

## Research Gaps and Future Directions
- The paper cannot separate research content changes from commercialization incentives, and says content changes would attenuate its estimates toward zero (fn. 6).
- Federal funding results use cross-sectional variation with limited identification, and the DOD result has an unexpected sign (Table 4).
- The horizon ends in 1997 and the index freezes university strengths at 1980; the author notes evolving research agendas may have persistent effects (fn. 24).
- Appendix tables (A1–A7) are online only and are not in this PDF, so robustness numbers cited in the text could not be checked here.

## Implications and Future Research (100-150 words)
For a project on 2-year college openings and local firms, industry mix and innovation, the transferable pieces are the exposure-by-shock design, the establishment-level decomposition into incumbents, single-unit entrants and multiunit expansions, and the linkage of firms to university relationships through survey data. The substantive findings (large effects concentrated in biomedical, electronics and chemicals; expansions by large firms) concern research universities and do not map onto vocational programs. A community college analogue would need exposure measures based on program fields, training-oriented outcomes and employer-college partnerships, with patents as a secondary outcome. The paper also suggests that zoning that permits entry of large firms near the institution may be a mediating factor worth measuring.

## Keywords/Tags
#bayh-dole #university-knowledge-spillovers #industry-agglomeration #technology-transfer #firm-entry #longitudinal-business-database #innovation-index #place-based-policy #jel-o31 #jel-r11

## Related Papers
- [[Kantor & Whalley (2014)]] Cited as identifying university spending effects on local wages and employment using endowment shocks, and as the closest prior work without a tight link from university ideas to related industries.
- [[Liu (2015)]] Cites a 2011 working paper version of this study among work on university innovation and local growth.
- [[Bonander, Jakobsson, Podestà, & Svensson (2016)]] A regional-outcome, synthetic control counterpart; it finds no regional growth effect from research-university status, in contrast to the industry-specific effects here.
- [[Baron, Kantor, & Whalley (2018)]] Shares the corpus theme of how research universities' reach affects local economies and industries.
