# Babbar, Kantor, Whalley, & Zeng (2026)

> Model-written summary (2026-11-24) of the paper's PDF: NBER WP 35966, October 2026 (working paper, not peer reviewed, p. 1). Not checked against the paper by a person.

## File Name
BabbarKantorWhalleyZeng_PublicRDAutomationSpaceRace_2026.pdf

## Paper Title
Public R&D and the Automation of Manufacturing: Evidence from the Space Race

## Basic Information
- Authors: Apoorva Babbar, Shawn Kantor, Alexander Whalley, and Jingyuan Zeng
- Year: 2026
- Journal: NBER Working Paper 35966 (October 2026)
- Field: Economics of innovation and labor economics; economic history
- Subfield: Public R&D, directed technical change, automation and the labor share
- Study type: Observational. A descriptive patent-level regression plus a triple-difference county-by-industry panel (1947-1992), with a patent-text validation appendix.

## Objective and Contribution (100-150 words)
Babbar, Kantor, Whalley, & Zeng (2026) ask whether mission-oriented public R&D pushes technological change toward automation, and whether this reaches local manufacturing labor markets. The setting is NASA's Space Race after Sputnik. The paper makes two contributions. First, it combines a full-text patent measure of automation versus augmentation (built following Autor, Chin, Salomons, and Seegmiller 2024) with a government-interest patent register. It shows that NASA-related patents are more automation-intensive than other patents, including within technology classes (Table 2). Second, it reuses the pre-Sputnik "space capability" exposure design of Kantor and Whalley (2025) to test whether exposed county-industry cells saw lower labor shares and a shifting skill mix from 1947 to 1992 (Tables 3-6). The authors read the labor-share results as evidence that public R&D shaped the direction of technology (pp. 3-5).

## Methodology (200-300 words)
**Data.** Full-text US patents, 1930-2025, 10,636,023 observations (p. 10). NASA flags come from a government-interest patent register. Census of Manufactures county by two-digit SIC data for 1947, 1954, 1958, 1963, 1967, 1972, 1977, 1982, 1987 and 1992 supply labor share (wage bill over value added) and skill intensity (non-production over production workers) (pp. 11, 15). Space exposure comes from digitized CIA estimates of Soviet space capabilities, 1947-1991 (p. 12).

**Design.** Patent level: a linear probability model of an automation-intensive indicator (automation score above augmentation score) on a NASA indicator, with year and, in the last column, USPC technology fixed effects (equation 1, p. 14). Panel level: a triple difference across high versus low pre-1958 space capability, space versus non-space industries (transportation and electronics), and pre/Space Race/post periods (equation 2, p. 16):

$$\log(Y_{ijt}) = \beta_1 + \beta_2 H_{ij}SR_t + \beta_3 H_{ij}Post_t + \beta_4 H_{ij}SR_t S_j + \beta_5 H_{ij}Post_t S_j + \pi_t P_{ij} + \mu_i + \theta_j + \lambda_t + \nu_{ijt}$$

$Y_{ijt}$ is labor share or skill intensity in county $i$, industry $j$, year $t$. $H_{ij}$ equals one if pre-1958 space capability is above the median. $SR_t$ and $Post_t$ are period indicators. $S_j$ flags space industries. $P_{ij}$ is total pre-1958 patents. $\mu_i$, $\theta_j$ and $\lambda_t$ are county, industry and year effects. Greek letters for the fixed effects are garbled in the dump; these labels are mine.

**Identifying assumption.** Capability is defined from Soviet technology choices rather than NASA's, to avoid NASA picking existing winners. Cells specialized in space-relevant technology are assumed not to have had differential trends absent the Space Race (p. 17).

**Estimation.** OLS in logs; an alternative adds MSA-by-year effects. An event study omits 1958.

**Inference.** Two-way clustering at MSA by industry (p. 17). Clustering for Table 2 and Table B.2 is not reported in the notes; Table 6 clusters at the industry level.

**Threats.** Pre-1958 differences in skill intensity and mainframe adoption; contemporaneous automation shocks in the same industries (p. 21).

## Sample and Setting (150-200 words)
The patent regressions use 2,742,807 observations (Table 2), drawn from the 10,636,023 patents in the full dataset; how the subset is selected is not reported in this version. The panel sample is restricted to counties with at least one patent in 1945-1958 and inside an MSA, cells observed in the 1958 Census and in at least eight census years, non-missing employment and value added, at least one space-related industry in the county, and excludes North Dakota, South Dakota and Wyoming (p. 13). The text reports 6,759 county-industry observations covering 86 counties and 19 two-digit SIC industries (p. 14), while Tables 3-5 report 6,717 observations. Table 1 reports 735 county-industry cells in 1958, 76 of them in space industries. Mean 1958 labor share is 0.26 (SD 0.26). The Space Race window is 1958-1972 and the post period 1973-1992 (p. 17); in the tables the Space Race years are 1963, 1967 and 1972 and the post years are 1977-1992. NASA accounted for 1% of GDP in 1966 (p. 4), and only 15% of federal R&D in 1966 was basic research (p. 3). The sample is large urban counties with prior patenting.

## Main Findings (200-300 words)
**NASA patents are more automation-intensive (descriptive).** About 71 percent of NASA patents are automation-oriented versus about 55 percent of non-NASA patents (p. 14). In Table 2 the NASA coefficient is 0.169 (SE 0.007) in column 1 and 0.056 (SE 0.006) with technology fixed effects in column 4, roughly one-third of the raw gap. Safety patents carry 0.107 (SE 0.001) in column 3 and science-based patents 0.005 to 0.016. The authors warn against a causal reading (p. 15).

**Labor share falls in exposed space-industry cells.** The triple-difference coefficients on log labor share are -0.28 (SE 0.08) and -0.31 (SE 0.08) in the Space Race period, and -0.30 (SE 0.10) and -0.28 (SE 0.13) in the post period (Table 3, cols. 1-2). The decline persists.

**Skill mix: authors see little change.** The corresponding skill-intensity coefficients are 0.13 (SE 0.06), 0.12 (SE 0.07), 0.11 (SE 0.09) and 0.11 (SE 0.08) (Table 3, cols. 3-4). The authors call these limited and imprecise (p. 18). Stratified results show similar labor-share declines in low and high initial skill cells (Table 4).

**No pre-trends and no non-local effects.** Event-study coefficients for 1947 and 1954 are close to zero (p. 18). In Table 5 the market-exposure triple terms are -0.05 (SE 0.05) and 0.14 (SE 0.09) in column 1, and 0.00 in column 2. National industry-level estimates are -0.55 (SE 0.33) and -0.55 (SE 0.23) for labor share (Table 6).

**Validation.** Integrated-circuit patents score higher on automation than other semiconductor patents (Table B.2).

## Key Figures and Tables
**Table 1 — Descriptive Statistics of Pre-Space Race Era.** Compares high and low space-capability cells and space versus non-space industries in 1958 (p. 34). Labor share is similar across groups (0.25 vs 0.26, p-value 0.773), but automation-intensive patents in 1953-1958 differ (2.04 vs 0.81, p-value 0.001) and space industries already patent more (3.79 vs 1.15). This motivates the triple difference.

**Table 2 — Government Interest, Automation, and Augmentation.** Patent-level LPM with 2,742,807 observations and R2 of 0.01 to 0.14 (p. 35). The NASA gap shrinks from 0.169 to 0.056 once USPC fixed effects are added but stays significant.

**Table 3 — Space Capability, Labor Share, and Skill Mix.** The main panel result (p. 36), 6,717 observations, with the labor-share triple terms between -0.28 and -0.31 and skill terms between 0.11 and 0.13.

**Table 4 — Space Capability, Labor Share, and Inequality: By 1958 Skill Intensity.** Splits by 1958 non-production share (p. 37). Panel A post-period labor-share coefficients reach -0.40 (SE 0.16) and -0.47 (SE 0.19). Skill-intensity coefficients in the triple terms run from 0.33 to 0.54 and each is at least 1.8 times its SE, which sits awkwardly with the "no skill effect" reading.

**Table 5 — Space Capability, Labor Share, and Inequality: Local and Market Effects.** Adds market-access exposure (p. 39). Local triple terms shrink to -0.04 (SE 0.08) in the Space Race period.

**Table 6 — Space Industries, Labor Share, and Inequality: National Effects.** Only 189 industry-year observations (p. 40).

**Figure 3 — Dynamic Effects: Space Industry and Manufacturing.** Event study with 1958 omitted (p. 43). Only axis ticks and notes survive extraction; Panel B is blank and no coefficients can be read.

**Table B.1 — Validation Exercise 1: Correlation between Automation, Augmentation Scores and Firm-Level Employment.** With firm fixed effects the automation coefficient is -0.004 (SE 0.022) in column 5 and -0.041 (SE 0.019) in column 6 (p. 31).

## Critical Analysis (300-400 words)
**Causal plausibility.** The exposure logic is thoughtful: capability is predetermined and keyed to Soviet, not US, technology choices, and the shock is a foreign launch. Pre-trends are flat in 1947 and 1954 only, two pre-periods, and the figure's coefficients cannot be checked here. The design identifies a differential change for exposed space-industry cells; it does not identify automation.

**Automation is inferred, not measured.** The patent measure (Table 2) never enters the panel regressions (Tables 3-6). The link from "NASA patents automate" to "labor share fell in exposed cells" is an interpretation. Labor share is wage bill over value added, so a demand-driven rise in value added, rents, or capital-intensive expansion lowers it with no labor-saving technology at all. The paper does not separate these channels.

**Internal tensions in the text.** (1) Observations are 6,759 in the text but 6,717 in Tables 3-5. (2) The text says Table 5 local effects resemble Table 3, but the local triple terms fall from -0.28 to -0.04 (SE 0.08). (3) The market-exposure terms for non-space industries are significant (-0.25 with SE 0.08; -0.41 with SE 0.13, Table 5, col. 1), unaddressed in the text. (4) Skill coefficients of 0.13 (SE 0.06) and 0.50 (SE 0.10, Table 4 Panel B) are not zero. (5) p. 14 says automation varies little with safety orientation, but Table 2 shows 0.107. (6) The main text says IC patents have lower augmentation scores (p. 11), but Table B.2 shows a positive 0.018 (SE 0.004). (7) National labor-share estimates have an SE of 0.33 on a coefficient of -0.55.

**Validation is thin.** In Table B.1 the automation-employment correlation turns positive or near zero once other terms are removed (0.096, SE 0.040, col. 2; -0.004, col. 5).

**Transfer to 2-year college openings.** The design does not transfer directly: it needs a predetermined capability index crossed with a national shock, and openings have no such shock. Its text-similarity machinery could transfer, for instance matching local industry patent text to program offerings, and the county-by-2-digit-industry panel with MSA-by-year effects is a usable template for firm and industry-mix outcomes. The automation/augmentation score is a ready innovation-direction outcome. The sample, large urban MSAs with prior patents and data ending in 1992, is far from rural community college settings.

## Research Gaps and Future Directions
- Test whether public R&D beyond NASA is also automation-intensive (p. 22).
- Use individual-level data with education and career trajectories to detect distributional effects (p. 22).
- Link the patent automation measure directly to the panel outcomes to test the mechanism.
- Study how policy shapes the direction, not only the rate, of technological change as AI advances (p. 22).
- Not reported in this version: sample selection for Table 2, clustering for patent regressions, and coefficients behind Figure 3.

## Implications and Future Research (100-150 words)
The paper's headline is that public R&D can steer technology toward labor substitution, with persistent local labor-share effects and little visible change in skill composition. For researchers studying local R&D shocks, it is a reminder to measure the direction of innovation, not just its volume, and to report the share-of-value-added denominator problem. For the reader's project on college openings, the transferable pieces are the text-based patent measures of what kind of innovation follows an institutional change and the triple-difference logic that uses predetermined local capability. Future work should tie the patent-level direction measure to the local outcomes it is meant to explain, and show pre-trends with more than two pre-periods before treating labor-share declines as evidence of automation.

## Keywords/Tags
#public-rd #automation #labor-share #space-race #nasa #triple-difference #patent-text #directed-technical-change #skill-composition #jel-o33

## Related Papers
- [[Kantor & Whalley (2023)]] This paper's parent design (cited as Kantor and Whalley 2025): the same pre-Sputnik capability exposure, applied there to output, employment and productivity.
- [[Baron, Kantor, & Whalley (2026)]] JEP essay that reviews the Space Race local-effects evidence this paper extends to automation and labor share.
- [[Autor, Chin, Salomons, & Seegmiller (2024)]] Source of the automation versus augmentation patent-text method used here (cited on p. 5).
- [[Gross & Sampat (2023)]] Cited wartime R&D study of local innovation effects, a parallel mission-oriented shock (p. 7).
