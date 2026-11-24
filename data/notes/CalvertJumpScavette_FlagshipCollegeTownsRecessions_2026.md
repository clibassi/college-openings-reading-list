# Calvert Jump & Scavette (2026)

> Model-written summary (2026-11-24) of the paper's PDF: Federal Reserve Bank of Philadelphia WP 26-08, published February 2026 (paper dated January 16, 2026; the title page says it was published in the Journal of Economic Geography, November 2025). Not checked against the paper by a person.

## File Name
CalvertJumpScavette_FlagshipCollegeTownsRecessions_2026.pdf

## Paper Title
Do Research Universities Recession-Proof Their Regions? Evidence from State Flagship College Towns

## Basic Information
- Authors: Robert Calvert Jump and Adam Scavette
- Year: 2026
- Journal: Federal Reserve Bank of Philadelphia Working Paper 26-08 (the paper states publication in the Journal of Economic Geography, November 2025)
- Field: Regional and urban economics
- Subfield: Regional economic resilience; local effects of research universities
- Study type: Observational quasi-experiment. Synthetic difference-in-differences on county panels for three recessions, plus illustrative synthetic control case studies.

## Objective and Contribution (100-150 words)
Calvert Jump & Scavette (2026) ask whether counties that host a state flagship university are more resilient to recessions, measured as a lower local unemployment response than comparable counties without R1 or R2 research universities. They study the dot-com (2001), great (2008) and Covid-19 (2020) recessions separately, each over a three-year post window. The contribution is to move the university-and-local-economy question from long-run growth to cyclical resilience, and to show that the sign is not stable across recessions. The authors propose that flagship towns stabilize demand for non-tradable goods and services through student and staff consumption, building on Howard, Weinstein, and Yang (2022), and that this buffer disappeared when students left campuses in 2020 (pp. 3-6).

## Methodology (200-300 words)
**Data.** County unemployment rates, 1997-2022, from the BLS Local Area Unemployment Statistics program. Treated counties are the state flagship universities in Dancy and Voight (2019). Controls are counties without R1 or R2 universities per the Carnegie list (ACE 2024). Industry employment shares come from County Business Patterns for 2000, 2007 and 2019, and rural-urban codes from USDA (p. 10).

**Design.** Each recession is a separate "treatment" experienced by all counties. The estimand $\tau$ is the difference between two treatments, suffering a recession with versus without a flagship university, not treatment versus no treatment (p. 13). Windows are 1997-2000 pre and 2001-2003 post, 2004-2007 and 2008-2010, 2016-2019 and 2020-2022 (p. 13). The main estimator is synthetic difference-in-differences (Arkhangelsky, Athey, Hirshberg, Imbens, and Wager 2021):

$$\hat\tau,\hat\mu,\hat\alpha,\hat\beta = \arg\min_{\tau,\mu,\alpha,\beta}\sum_{i=1}^{J+1}\sum_{t=1}^{T}\left(Y_{it}-\mu-\alpha_i-\beta_t-D_{it}\tau\right)^2\hat\omega_i\hat\lambda_t$$

$Y_{it}$ is county $i$'s unemployment rate in year $t$; $D_{it}=1$ for flagship counties in the post period; $\alpha_i,\beta_t$ are county and year effects; $\hat\omega_i$ and $\hat\lambda_t$ are estimated unit and time weights; $J+1$ counties and $T$ years (p. 12).

**Identifying assumption.** After county and year effects and weighting to match pre-recession trends, other counties are a valid counterfactual for flagship counties (p. 4). The weights are meant to restore parallel trends, which fail in 2001 (p. 13).

**Estimation.** SDiD for the full sample; synthetic control (Abadie, Diamond, and Hainmueller 2010) for single-county case studies with a within-state donor pool (p. 20). Mechanism checks re-estimate SDiD on log employment in six CBP sectors.

**Inference.** Standard errors clustered by county via block bootstrap with 100 replications (p. 12).

**Threats.** No visual parallel-trends check; LAUS county estimates are interdependent within states (pp. 19-20); flagship counties differ in unmeasured ways.

## Sample and Setting (150-200 words)
Table 1 lists 50 state flagship universities, 43 classified R1 and seven R2 (Alaska, Idaho, North Dakota, Rhode Island, South Dakota, Vermont, Wyoming) in the 2021 Carnegie classification (p. 7). Enrollment plus employment as a share of home-county population in 2019 ranges from 2 percent (University of Hawaii at Manoa) to 78 percent (University of South Dakota, Clay County) (p. 10). Only 14 flagship counties carry rural-urban code 1; most are 2 or 3 (p. 10). The authors argue flagships were sited for land availability or in state capitals, not local demand, and sit in small to medium cities (pp. 7-8). The panel is annual, 1997-2022; mean flagship-county unemployment was one to two percentage points below controls through 2010 and converged to under one point by 2020 (p. 11). Appendix B regressions use about 20,195, 20,153 and 20,192 county-year observations for the three recessions (pp. 39-40). The number of treated and control counties in the SDiD estimation is not reported in this version.

## Main Findings (200-300 words)
**Raw gaps.** Peak-to-trough, flagship counties saw unemployment rise about 0.3 percentage points less in the dot-com recession and 0.8 less in the great recession, but 0.5 more in the Covid-19 recession (p. 11). These are descriptive.

**SDiD estimates.** The 2001 effect is a small, insignificant resiliency effect (about -0.1 percentage point, p. 15). The 2008 effect is "more than 0.5 percentage point lower" unemployment, large and significant; the 2020 effect is "almost equal and opposite in magnitude" (p. 14; also pp. 3, 26). Point estimates and intervals are shown only in Figure 3, so exact values and standard errors are not reported in this version.

**Sectoral employment.** For 2001 the log-employment effects are small or insignificant; for 2008 they are qualitatively similar but about twice as large across industries; in 2020 flagship counties saw large, significant falls in leisure and hospitality employment (pp. 18-19).

**Scale and local students.** In Appendix B, a scale interaction in 2008 is -0.0292 (p-value 0.000); with average scale of 17.7 percent this implies about -0.517, close to the main estimate (p. 40). In 2020, with both terms, scale is -0.0149 (p-value 0.001) and the share of home-state students is 0.0119 (p-value 0.000) (p. 40). The authors read this as local students returning home driving the negative 2020 result.

**Case studies.** Synthetic controls for Fayette County (Kentucky) and Monongalia County (West Virginia) show the same sign pattern (pp. 21-22); the authors say these states were chosen because the effect is especially clear.

**Robustness.** Extending windows to seven post years leaves results similar (Figure C1, p. 42).

## Key Figures and Tables
**Table 1 — State Flagship Universities.** Lists each flagship with county population share, rural-urban code, Morrill Act 1862 status and Carnegie class (p. 9). It defines the treated set and shows heterogeneity in how large the university is relative to its county (2 to 78 percent).

**Figure 1 — Mean unemployment rates across US counties with and without a state flagship university, 1997-2022.** Shows flagship counties one to two points below controls until 2010, converging by 2020 (p. 11). It makes the failure of parallel trends in 2001 visible and motivates the synthetic weights.

**Figure 2 — Histogram of changes in county unemployment rates through recessions.** Kernel density for flagships over histograms for other counties (p. 12). The flagship distribution sits left of controls in 2001 and 2008 and right in 2020 (text, p. 11).

**Figure 3 — Estimates of the effect of a flagship university on a county's resilience to the 2001, 2008 and 2020 recessions, using the synthetic difference-in-differences estimator in (1).** The core result (p. 14), with an axis from -1 to 1 and 95 percent intervals. Numeric estimates are not printed in the text.

**Figure 6 — Synthetic difference-in-differences estimates of the effect of flagship universities on log employment by industry, 2001 and 2008 recessions.** Six sectors; the 2008 axis runs 0 to 0.1 (p. 18).

**Figure 7 — Synthetic difference-in-differences estimates of the effect of flagship universities on log employment by industry, 2020 recession.** Leisure and hospitality is the key sector (p. 19).

**Figure 8 — Synthetic controls for Kentucky in the 2001, 2008 and 2020 recessions.** Fayette County against its synthetic control; panel (d) runs the 1997-2000 synthetic control forward through 2022 (p. 21). The authors describe the synthetic county as running above Fayette in 2008 and below it after 2020.

**Figure 9 — Synthetic controls for West Virginia in the 2001, 2008 and 2020 recessions.** Same layout for Monongalia County (p. 22). The authors report similar patterns.

**Table B3 — Additional regressions for 2020 recession.** Scale and home-state-student share regressions that underpin the mechanism story (p. 40).

## Critical Analysis (300-400 words)
**Identification.** The design is clever but the estimand is relative, a flagship county's recession response minus other counties' response, so "effect of a university" is shorthand for everything correlated with hosting a flagship. Flagships are often in state capitals or college towns with heavy education, health and public-sector shares, and the paper does not separate university presence from that industry mix (the Introduction notes that industry mix predicts recession sensitivity, p. 3). SDiD removes pre-trend differences by construction, so there is no pre-trend test; the authors say as much (p. 16). Weights are far more extreme in 2001 and 2020 than 2008 (Appendix A), so the sign reversal and the 2008 result rest on different amounts of reweighting.

**Mechanism.** The consumption story is consistent with the pattern but not isolated. County consumption data are unavailable (p. 17); the sector regressions show lower leisure and hospitality employment in 2020 but cannot separate student spending from the university's own employment, and the 2001 null is also read as supporting the story. In Table B3 the scale term alone is positive and only marginally significant (0.00638, p-value 0.093), and turns negative once local-student share is added.

**Internal consistency.** Section 4.1 uses four pre-years (1997-2000, p. 13), but Appendix C describes "three year" pre and post windows (p. 42). The raw 2001 gap of 0.3 points is larger than the SDiD estimate of about -0.1. Bootstrap uses only 100 replications and no standard errors are tabulated.

**Selection of examples.** Kentucky and West Virginia are chosen because they are clean (p. 22).

**Transfer to 2-year college openings.** This is not an opening design: the treated colleges are long established, and the outcome is cyclical unemployment, not firms, industry mix or patents. The SDiD-with-composite-treatment template and the within-state synthetic control donor pool are usable for single-county openings, and the CBP sector-employment approach could give industry-mix outcomes. Community colleges draw mostly local commuters, and Table B3 suggests the local-student share is what flips the sign, so the consumption channel here should be weaker or different.

## Research Gaps and Future Directions
- County-level consumption data to test the non-tradable demand mechanism directly (p. 17).
- Whether effects differ by university size, student origin and tuition-paying status beyond the Appendix B regressions.
- Effects of distance learning and college closures on future resilience (pp. 23-24).
- Resilience to other shock types ("varieties of recessions", p. 14).
- Not reported in this version: numeric SDiD estimates and standard errors, counts of treated and control counties, and bootstrap diagnostics.

## Implications and Future Research (100-150 words)
For regional policy, the paper suggests anchor institutions can cushion consumption-driven downturns but are not a general hedge: the same institution amplified the 2020 shock. The authors conclude that establishing educational institutions or regional offshoots is likely to improve resilience to consumption-based recessions (p. 26), a stronger conclusion than a design on existing flagships supports. For research on new colleges, the useful lessons are to model composite treatments transparently, to report numeric estimates and the weight distributions, and to test mechanisms with sector employment. Future work should use new openings as the treatment, add firm, industry and patent outcomes, and check whether community colleges, with more local commuter students, produce a smaller cyclical buffer.

## Keywords/Tags
#regional-resilience #synthetic-did #synthetic-control #flagship-universities #college-towns #recessions #covid-19 #non-tradables #jel-r11 #jel-r23

## Related Papers
- [[Howard, Weinstein, & Yang (2024)]] Closest antecedent: normal schools and asylums as sources of university-driven resilience; supplies the non-tradable consumption mechanism tested here.
- [[Kantor & Whalley (2014)]] Cited as evidence on local knowledge spillovers from research universities; the long-run counterpart to this paper's cyclical question.
- [[Hausman (2022)]] Cited on university innovation and local growth; complements the demand-side story with an innovation channel.
- [[Schweiger, Stepanov, & Zacchia (2022)]] Cited as an R&D place-based policy study; a long-run benchmark for the question of what research institutions do for regions.
