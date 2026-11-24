# Schweiger, Stepanov, & Zacchia (2022)

> Model-written summary (2026-11-24) of the paper's PDF: published version, AEJ: Economic Policy 14(3): 322–351 (August 2022). Not checked against the paper by a person.

## File Name
SchweigerStepanovZacchia_RussianScienceCities_2022.pdf

## Paper Title
The Long-Run Effects of R&D Place-Based Policies: Evidence from Russian Science Cities

## Basic Information
- Authors: Helena Schweiger, Alexander Stepanov, and Paolo Zacchia
- Year: 2022
- Journal: American Economic Journal: Economic Policy 14(3): 322–351
- Field: Economics (economics of innovation; urban and regional economics)
- Subfield: Place-based policy, agglomeration and knowledge spillovers, economic history
- Study type: Observational study; covariate-matching ATT estimates (causal claim resting on selection-on-observables) plus a structural spatial equilibrium model estimated by GMM

## Objective and Contribution (100-150 words)
The paper asks whether a historical place-based R&D policy, the Soviet creation of 95 "Science Cities" for strategic, mostly military research, still shows up in present-day Russian municipalities decades after state support collapsed (pp. 1–3). Outcomes are human capital, patenting, R&D/ICT employment and wages, and proxies for local economic activity. The contributions are: a hand-built database of Science Cities and municipal covariates (pp. 10–13); a long-run ATT design in a setting where site choice is argued to be quasi-arbitrary and where post-1991 withdrawal of support is argued to be exogenous (p. 2); direct tests of rival explanations (current government support, fiscal transfers, mean reversion; pp. 16–20); and a two-skill spatial equilibrium model combining persistence and agglomeration, with agglomeration elasticities "in a neighborhood of 0.3" (p. 3).

## Methodology (200-300 words)
**Data.** Municipality-level dataset of 2,338 Russian municipalities (Moscow and St. Petersburg excluded) combining a Science Cities database (95 cities, 88 treated municipalities, 84 after dropping four academic-town regional capitals) with 2010 census education data, EPO patent applications (inventor addresses weighted by 1/number of inventors, priority years 1978–1999 and 2000–2013), ROSSTAT employment and wages, 2009–2011 night lights, the 2010 SME census, 2006–2016 municipal budgets, and historical covariates (1959 census population, 1959 higher-education institutions, 1947 R&D institutes, 1947 defense plants, 1946 State Bank branches) (pp. 10–13).

**Design.** Matching estimate of the ATT of historical Science City status on long-run outcomes. Each Science City is matched one-to-one, with replacement, to the municipality with the smallest extended Mahalanobis distance (p. 10):

$$m_{sz}(x_{is},x_{iz}) = (x_{is}-x_{iz})^{T}\,\Sigma^{-1/2}\,W\,\Sigma^{-1/2}\,(x_{is}-x_{iz})$$

where $x_{ic}$ is the covariate vector of municipality $i$ of type $c\in\{s,z\}$ (Science City or control), $\Sigma^{-1/2}$ is the inverted Cholesky factor of the covariance matrix of covariates, and $W$ is a weight matrix chosen by a genetic algorithm to optimize balance. Exact matching is imposed on five dummies (closed city, coast, river/lake access, mountainous, R&D institutes in 1947); covariates include coordinates, 200 km density of population and factories, and urban population in 1897, 1926, 1939 and 1959 (pp. 9–14). Matches must be at least 50 km apart.

**Identifying assumption.** Conditional on the matching variables, site choice was determined at the margin by factors independent of post-transition outcomes (p. 3).

**Estimation.** ATT with and without Abadie–Imbens bias adjustment; a spatial equilibrium model is estimated by one-step GMM on the matched sample, with the labor-share parameter calibrated at 0.66 (p. 26).

**Inference.** Abadie–Imbens standard errors; Holm FWER-adjusted p-values; Rosenbaum sensitivity bounds (Γ*); Hochberg FDR-adjusted t-tests across city categories (pp. 11, 16, 22).

**Threats.** SUTVA, unobserved pre-trends, residual current state support, fiscal channels, mean reversion.

## Sample and Setting (150-200 words)
The setting is Soviet and post-Soviet Russia. Science Cities were concentrated, secret R&D settlements, about two-thirds created by repurposing existing settlements and the rest built from scratch, mostly established after World War II and especially in the 1950s (p. 5). Staff were relocated and given better-than-standard living conditions (p. 5). Some were "closed" cities. After 1991, gross R&D expenditure fell from about 2 percent of GDP in 1990 to 0.74 percent in 1992 and R&D employment fell by about 50 percent (p. 6). Support was partly resumed in the 2000s for 14 Naukogrady (p. 2).

The estimation sample contains 78 matched treated municipalities and 59 matched controls (p. 13); 6 of the 84 Science City municipalities have no match under the exact-matching constraints (p. 13). Coverage is smaller for ROSSTAT outcomes (67 treated and 52 controls) and SME outcomes (65 and 50) because closed cities are missing (Table 1; fn. 18, p. 12). The historical-only sample has 64 treated and 51 controls (Table 2). The model uses 55 observations (Table 6). Science Cities were located in more populous, warmer places with more plants, universities and R&D institutes than ordinary municipalities (p. 13).

## Main Findings (200-300 words)
**Human capital and size.** Science Cities have a population about 27 thousand larger than matched controls (ATT 27.256, SE 10.869; Table 1, p. 15) and a graduate share 0.067 higher (SE 0.010), against a raw gap of 0.113. The postgraduate share is 0.003 higher (SE 0.001).

**Innovation.** Fractional EPO patents are 3.014 higher before 2000 (SE 0.713) and 9.260 higher since 2000 (SE 2.160); these ATTs are not below the raw differences (Table 1). The R&D/ICT employment share is 0.023 higher (SE 0.004) and R&D/ICT salary 7.903 higher (SE 1.349) (Table 1).

**Economic activity.** Night lights are 0.533 higher (SE 0.155). SME density is imprecise (0.243, SE 1.369; 0.757, SE 1.335 bias-adjusted), but SME labor productivity is higher (0.492, SE 0.104). The authors read this as an intensive-margin effect (p. 16).

**Current support.** Dropping the 14 Naukogrady leaves most estimates similar but cuts patents by about 20 percent (pre-2000) and 28 percent (post-2000) and the R&D/ICT employment share by about 1 percentage point (Table 2, pp. 16–17). The authors conclude that current support matters for R&D/ICT activity but is not the source of the main effects.

**No mean reversion.** The graduate-share ATT is 0.079 for those born in 1965 or earlier and 0.056 for younger cohorts (Table 3, p. 18); night lights show no catch-up (Fig. 2).

**Fiscal channel.** ATTs on total revenues (−0.283, SE 0.865) and expenditures (0.236, SE 0.871) are close to zero. Tax income is higher (1.986, SE 0.473) and transfers lower (−2.269, SE 0.688) (Table 4, p. 21).

**Model.** The high-to-high spillover elasticity is 0.269 (SE 0.061; Table 6, col. 1). The constrained estimate is 0.323 (SE 0.063; Table 6, col. 4). A subsidy of about 150 percent of the ex ante wage would be needed to reproduce the allocation (p. 27).

## Key Figures and Tables
**Figure 1 — Location of Science Cities and Regional Population Density.** Map of Science Cities over 1959 regional population density (p. 7). It shows the two location types, urbanized areas and remote, densely populated regions. It motivates matching on geography and density.

**Table 1 — Municipal-Level Matching, Main Analysis: All Science Cities.** Raw differences and one-nearest-neighbor ATTs, with and without bias adjustment, for 11 outcomes, plus Rosenbaum Γ* (p. 15). It is the headline result. Γ* is 3.40 for both patent outcomes but 1.00 for SME density and 1.30 for wholesale-retail salary, so those two are fragile.

**Table 2 — Municipal-Level Matching, Main Analysis: "Historical" Science Cities.** The same specification excluding the 14 Naukogrady (p. 17). Most ATTs are near Table 1, but patents (2.369 and 6.664) and the R&D/ICT employment share (0.012) fall. It addresses the concern that current state support drives the results.

**Table 3 — Municipal-Level Matching, Demographic Dynamics: All Science Cities.** ATTs on graduate and postgraduate shares split by birth cohort (p. 18). Younger cohorts still show positive gaps, which is the main evidence against mean reversion.

**Figure 2 — Time Series of the Average Standardized Night Lights Indicators, 1992–2010.** Annual night lights for Science Cities and matched controls (p. 19). Science Cities stay above controls throughout with no visible catch-up; this is the only post-transition time series in the paper.

**Table 4 — Municipal-Level Matching, Budgets Analysis: All Science Cities.** Per capita revenues, taxes, transfers and expenditures, averaged over 2006–2016 (p. 21). Matched differences in total spending are about zero, which the authors use to reject the public-goods persistence mechanism.

**Table 5 — Robustness t-Tests: Differences between Types of Science Cities.** Tests of heterogeneity by secrecy versus usability, built from scratch, source list, nearby Science Cities and founding date (p. 22). No difference is significant after FDR adjustment.

**Table 6 — Estimation of the Spatial Equilibrium Model.** GMM estimates of spillover and history-multiplier parameters under two approaches, constrained and unconstrained (p. 26). The test of the spillover constraints has p-values of 0.378 and 0.385.

**Table 7 — Wage Ratios Defined in Equation (5) for Alternative Allocations at t = 0.** Model-implied wage ratios for six counterfactual allocations of high- and low-skilled workers (p. 27). Column 2 gives 1.606 for high-skilled wages, close to the observed matched-sample gap.

## Critical Analysis (300-400 words)
The causal claim rests on selection on observables, and the case for conditional independence is narrative: archival work on Soviet "rules of thumb" and the authors' reading of the secrecy-usability trade-off (pp. 6–8). The authors admit that "it is impossible to provide a definitive response" with current archives (p. 8). The matching variables are mostly 1940s–1959 snapshots, so the design controls for pre-trends only through lagged urban population (1897–1959) and cannot test for pre-trends in the outcomes themselves. The Rosenbaum Γ* values (3.40 for patents; 1.00 to 1.30 for the weakest outcomes) indicate robustness to moderate hidden bias but are a Wilcoxon-based bound for matched pairs, not a test of the assumption.

The estimand is also narrow. The ATT is causal for Science Cities only against a counterfactual in which the extra scientists were never trained (p. 14), and the treatment bundles research institutes, relocated skilled labor, housing quality and, for some, closed-city status. Data gaps matter: closed cities are absent from ROSSTAT data, so the R&D/ICT and SME estimates come from fewer pairs (Table 1; fn. 18). Matching with replacement (78 treated, 59 controls) gives wide intervals, and SUTVA is only partly testable (fn. 12, p. 9; Table 5).

The Naukogrady exercise is informative, but it is not a clean separation: remaining historical cities may still receive indirect support that municipal budgets cannot reveal (federal R&D spending is not observed; fn. 20, p. 12). The structural model identifies agglomeration from only 55 observations. It assumes older cohorts are immobile and calibrates λ at 0.66 (p. 26). The subsidy calculation is explicitly tentative (p. 27). The mean-reversion evidence is descriptive.

For the reader's project, the transfer is partial. The design cannot be reused for 2-year college openings as is. It is cross-sectional with no pre-period outcomes, the treatment is a very large concentrated shock to scientist employment, and the exogeneity story is specific to Soviet secrecy. What does transfer: matching on lagged local population and nearby-density controls with a minimum distance between treated and control units; Rosenbaum bounds as a sensitivity check; the "current support" and fiscal-channel tests as templates for ruling out confounding local investment; and EPO fractional inventor counts and SME productivity as firm and innovation outcomes. A community college opening would need a panel or event-study design with pre-opening firm and patent data.

## Research Gaps and Future Directions
- Authors say they plan cross-municipality migration data to get better labor-supply elasticities and subsidy estimates (p. 27).
- A fuller welfare model is needed because the calculations cannot reveal losses in other Russian cities (p. 27).
- Federal R&D spending in Science Cities is not observed (fn. 20, p. 12).
- Closed cities are missing from ROSSTAT data, which limits coverage (fn. 18, p. 12).
- No pre-period outcome data are used; only lagged urban population enters the matching (p. 10).
- Civil-purpose R&D policies are suggested as a follow-up (p. 28).

## Implications and Future Research (100-150 words)
For this project, the paper is a long-run, persistence-plus-agglomeration benchmark for how an institution that concentrates skilled workers can leave lasting local effects on human capital, patenting and firm productivity. It supplies outcome definitions (EPO fractional inventor counts, SME productivity, R&D/ICT employment share) and a template for ruling out alternative channels. It does not supply a design for 2-year colleges: the treatment is far larger, the setting is a command economy, and the evidence is cross-sectional. Future work on community college openings should use panel or event-study variation with pre-opening trends, follow the paper in showing results with and without publicly supported cases, and report Rosenbaum-style sensitivity bounds.

## Keywords/Tags
#place-based-policy #science-cities #matching-estimator #agglomeration #knowledge-spillovers #long-run-persistence #patents #spatial-equilibrium #jel-o33 #jel-r58

## Related Papers
- [[Kantor & Whalley (2014)]] Both papers use historical R&D or university shocks to study local spillovers; this paper adds a long-run persistence and matching design.
- [[Andrews (2023)]] A U.S. analogue on college establishment and local invention; compare its identification of local invention outcomes with this paper's patent results.
- [[Hausman (2022)]] Another study of how university innovation links to local economic outcomes, useful as a comparison for patent and firm outcomes.
- [[Howard, Weinstein, & Yang (2024)]] Studies long-run local resilience from historical university-type institutions, a close match to this paper's persistence theme.
