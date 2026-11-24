# Kantor & Whalley (2014)

> Model-written summary (2026-11-24) of the paper's PDF: published version, REStat 96(1), March 2014, 171–188. Not checked against the paper by a person.

## File Name
KantorWhalley_KnowledgeSpilloversResearchUniversities_2014.pdf

## Paper Title
Knowledge Spillovers from Research Universities: Evidence from Endowment Value Shocks

## Basic Information
- Authors: Shawn Kantor and Alexander Whalley
- Year: 2014 (received March 19, 2010; revision accepted August 24, 2012, p. 1)
- Journal: The Review of Economics and Statistics, March 2014, 96(1): 171–188
- Field: Urban and regional economics; economics of innovation
- Subfield: University knowledge spillovers; agglomeration
- Study type: Instrumental variables (shift-share style) on a county by industry long-difference panel

## Objective and Contribution (100-150 words)
The paper estimates the causal effect of research university activity on wages paid by local firms outside higher education (p. 1–2). University activity is endogenous: productive local firms may attract university partnerships and demand its graduates, and spillovers can run in both directions (p. 2). The authors build an instrument from the fact that universities spend a roughly fixed share of endowment market value, interacting national stock market changes with each county's lagged endowment per capita (p. 4–5). The contribution is an identification strategy for university spillovers in the agglomeration literature, plus evidence that effects are persistent and larger where universities are more research intensive or local industries are technologically closer to them (p. 2–3). The headline is that a 10% increase in higher education spending raises noneducation labor income by 0.8% (p. 2).

## Methodology (200-300 words)
**Data.** HEGIS/IPEDS university finances, 1981–1996; County Business Patterns (CBP) for labor income and employment by county and SIC industry; NACUBO endowment equity shares; 1991 U.S. News rankings; the S&P 500 index (p. 6).

**Design.** Long differences over three and five years for county $i$, industry $j$:
$$\Delta Y_{ijt} = \alpha_1 \Delta UE_{it} + T + \varepsilon_{ijt}$$
$$\Delta UE_{it} = \beta_1 (\Delta SM_t \times IE_{i,t-x-1}) + T + \nu_{it}$$
$\Delta Y$ is the long difference in log average noneducation labor income, $\Delta UE$ the long difference in per capita total university expenditure, $\Delta SM$ the change in the S&P 500, $IE$ lagged per capita endowment market value, and $T$ year effects (p. 4).

**Identifying assumption.** Without stock price changes, labor income in counties with different initial endowments would have grown at similar rates (p. 5). Time-invariant differences are differenced out.

**Estimation.** Two-stage least squares, weighted by 1981 industry-county employment so estimates reflect the average worker (p. 6). Expenditure covers all revenue sources.

**Inference.** Standard errors clustered by county (p. 6); county-year clustering in robustness (Table 10).

**Threats.** Stock shocks may differentially hit firms (credit-constrained), universities (higher-quality portfolios) or counties. The authors add state, industry, quality, rent and 1900-characteristic interactions with stock shocks (equations 3–4, Table 11) and note that universities deviate from payout rules only in negative markets, which did not occur over any three- or five-year span in the sample (p. 5).

## Sample and Setting (150-200 words)
The sample starts with 229 institutions classified Research I, Research II, Doctoral I or Doctoral II in the 1994 Carnegie classification, restricts to counties with populations above 250,000 and excludes the District of Columbia, leaving 138; dropping three institutions with missing expenditure data gives 135 institutions in 85 counties (p. 6). Missing single years are imputed for fourteen institutions. The sample follows up to 58 SIC industries per county, dropping tobacco manufacturing, education, and agriculture, minerals and mining (p. 7). The panel has 40,380 county-industry-year observations for three-year differences and 33,650 for five-year differences (Table 3).

University counties differ from nonuniversity counties: average noneducation labor income was $15,325 against $14,719 in 1981, and population 940,703 against 440,303 (Table 1, p. 8). Among university counties, mean 1981 university expenditure was $0.71 per thousand residents and endowment market value $0.47 per thousand (Table 1). The period ends in 1996 because of data changes in 1997–2000 (p. 6).

## Main Findings (200-300 words)
**First stage.** The instrument is strong but near conventional thresholds: 0.078 (0.022), F = 12.96 for three-year differences, and 0.090 (0.025), F = 13.31 for five-year (Table 3, p. 10). The authors read 0.090 as a 9 cent response per dollar of lagged endowment, above the 4% to 5% payout rule (p. 8).

**Wage spillovers.** OLS gives 0.064 (0.029) at three years and 0.071 (0.032) at five; TSLS gives 0.114 (0.036) and 0.115 (0.038) (Table 4, p. 10). The authors translate a one standard deviation ($1.01 per thousand residents) rise into 11.5% higher noneducation labor income, an elasticity of 0.08, $0.89 of added labor income per $1 of spending and a multiplier of about 1.9 (p. 10).

**Employment.** TSLS coefficients are 0.123 (0.081) and 0.162 (0.097), not significant (Table 5, p. 11), attributed to labor-market frictions or decreasing returns to immovable factors (p. 10).

**Persistence.** Lagged annual changes show larger coefficients at lags four and five: 0.076 (0.030) and 0.120 (0.043) (Table 6). Lagged long differences give 0.105 (0.040) and 0.121 (0.049) (Table 7, p. 11).

**Mechanism.** The endowment shock raises graduate enrollment, 0.163 (0.100) at three years and 0.240 (0.098) at five, with undergraduate enrollment unchanged (Table 8, p. 12).

**Heterogeneity.** Five-year effects are 0.134 (0.042) in counties with above-median graduate shares against 0.042 (0.014) below; 0.130 against 0.060 for labor-pooling industries; 0.125 against 0.095 for patent-citing industries; and 0.115 against 0.091 for college-graduate-intensive industries (Table 9, p. 13).

## Key Figures and Tables
**Table 1 — Baseline County Characteristics, University and Nonuniversity Locations.** Compares 85 university and 94 nonuniversity counties in 1980–81. University counties have higher noneducation labor income (t = 2.97), larger populations, lower retail shares and higher finance, insurance and real estate shares. The authors cite these gaps as the reason to restrict to university counties and to use an instrument (p. 7–8).

**Table 3 — The Effect of Stock Market Shocks Interacted with the Value of Lagged Endowments on University Expenditures, 1981–1996.** First stage for equation (2): 0.078 (0.022), F = 12.96 [0.0005], 40,380 observations; and 0.090 (0.025), F = 13.31, 33,650 observations (p. 10).

**Table 4 — The Effect of University Activity on Local Labor Income, 1981–1996.** Central results: TSLS coefficients 0.114 and 0.115, larger than OLS 0.064 and 0.071. The authors attribute the gap to measurement error in expenditure (p. 10, 14).

**Table 5 — The Effect of University Activity on Local Employment, 1981–1996.** TSLS employment effects of 0.123 (0.081) and 0.162 (0.097), imprecise and not significant (p. 11).

**Table 9 — The Effect of University Activity on Local Labor Income, 1981–1996: Heterogeneous Effects.** Splits at the median of graduate share, labor-market pooling with higher education, university patent citation, and college-graduate employment. The patterns support a research-and-proximity interpretation, although splits are not separately instrumented (p. 13).

**Table 10 — The Effect of University Activity on Local Labor Income, 1981–1996: Alternative Samples, Inference Procedures, and Levels of Aggregation.** Unweighted TSLS falls to 0.028 (0.014) and 0.035 (0.013), with F = 6.16 and 7.55; county-level estimates are 0.051 (0.019) and 0.055 (0.023) (p. 14).

**Table 11 — The Effect of University Activity on Local Labor Income, 1981–1996: Alternative Instrumental Variable and Additional Stock Market Exposure Control Specifications.** The table is rotated and scrambled in the dump, and column mapping is reconstructed from fragments. Estimates range from about 0.074 to 0.162 across columns, with a first stage F of 74.13 and 59.19 when exposure to stock shocks varies by quality and graduate share (p. 15–16).

## Critical Analysis (300-400 words)
The instrument is clever and the long-difference design removes fixed county and industry differences, but it carries several threats. The shock is one national series, the S&P 500, and its main effect is absorbed by year effects, so identification comes entirely from cross-county differences in initial endowment per capita. Endowment-rich counties are older, higher-ranked, more private and more college-educated (Table 2, p. 9), so the exclusion restriction requires that no such characteristic leads to differential income trends when stocks rise. Table 11 allows quality, state, industry, rent and 1900 characteristics to interact with the shock and results hold, with the industry-trend estimate at 78% of baseline (p. 15–16). Even so, the stock boom in the sample (no negative three- or five-year returns, p. 5) can raise local wealth, donor giving and firm finance directly, and the paper's donations test is insignificant (Table 8) rather than decisive.

Instrument strength is borderline: F is near 13, falls to 8.01 in Table 7's five-year model, and to 6.16 and 7.55 in the unweighted results (Table 10). The unweighted estimates are about a quarter to a third of the baseline, so the headline applies to employment-weighted industries that are overrepresented in university counties.

TSLS exceeds OLS (0.114 against 0.064). The authors attribute this to measurement error, supported by trimming, but the estimate is also a local effect for endowment-driven expenditure changes at endowment-rich institutions.

The outcome is labor income, not productivity. Employment effects are not significant, composition and skill changes are not examined in this version, and spatial-equilibrium logic gives wages as both a lower bound (land rents) and an upper bound (migration frictions) on productivity gains (p. 3, 10). Total expenditure includes tuition and state support, and the endowment shock moves graduate enrollment (Table 8), so "knowledge spillovers" are inferred from splits, not isolated.

Relevance to the project: the instrument fails for two-year colleges, which have no meaningful endowments, and the sample is research universities in large counties with wage outcomes, not firm entry or patents. What does transfer is the county-by-industry panel from County Business Patterns and the proximity splits (labor pooling, patent citation, college-graduate intensity), which suggest testing whether college openings shift industry mix toward industries that hire the college's graduates.

## Research Gaps and Future Directions
- The mechanism is untested; the authors call for analysis of how industries close to higher education respond (p. 17).
- Effects are estimated only for large urban research-university counties, 1981–1996, before alternative endowment assets grew (p. 5–6).
- Employment, firm entry and patent outcomes are not estimated; employment effects are imprecise (Table 5).
- Heterogeneity splits are descriptive and not separately instrumented (Table 9).
- Composition of the workforce behind average labor income is not addressed in this version.

## Implications and Future Research (100-150 words)
The paper's policy message is that place-based university policy can raise local wages when focused on industries close to university knowledge (p. 17). For the project on two-year college openings, the exogenous-shock instrument is unavailable, so identification must come from openings or siting rules, not endowments. The design lessons are to use county-by-industry cells, weight by baseline employment, report weighted and unweighted estimates, and test heterogeneity by industry proximity to college outputs, such as labor pooling or share of college graduates. The persistence evidence (Tables 6 and 7) suggests allowing multi-year dynamic responses. Outcomes should extend to firms, industry mix and patents, which this paper does not examine.

## Keywords/Tags
#knowledge-spillovers #research-universities #endowment-shocks #instrumental-variables #agglomeration #local-labor-income #long-differences #shift-share-instrument #labor-market-pooling

## Related Papers
- [[Lee (2018)]] Synthetic-control estimate for the UC Merced opening; Lee cites this paper to explain why tradable sectors did not grow in Merced.
- [[Kantor & Whalley (2023)]] Same authors' later paper using Space Race R&D for identification and also finding modest local effects.
- [[Hausman (2022)]] This paper cites an earlier CES working paper version for employment effects of Bayh-Dole (p. 10, fn. 23).
- [[Baron, Kantor, & Whalley (2018)]] Corpus paper on extending research universities' reach; same authors, not cited here.
- [[Liu (2015)]] Corpus paper on land-grant spillovers, a long-run university-funding comparison not cited here.
