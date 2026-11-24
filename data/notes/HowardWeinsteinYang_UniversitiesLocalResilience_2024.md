# Howard, Weinstein, & Yang (2024)

> Model-written summary (2026-11-24) of the paper's PDF: published version, The Review of Economics and Statistics, July 2024, 106(4): 1129–1145 (PDF carries a © 2022 line and a MIT Press download stamp; the appendix is not in the text dump). Not checked against the paper by a person.

## File Name
HowardWeinsteinYang_UniversitiesLocalResilience_2024.pdf

## Paper Title
Do Universities Improve Local Economic Resilience?

## Basic Information
- Authors: Greg Howard, Russell Weinstein, and Yuhao Yang
- Year: 2024
- Journal: The Review of Economics and Statistics 106(4): 1129–1145 (July 2024)
- Field: Economics (regional and urban economics; economics of higher education)
- Subfield: Local labor markets, university effects on regional resilience, historical natural experiment
- Study type: Quasi-experimental (historical site-selection comparison, reduced form with state fixed effects) plus descriptive mediation analysis

## Objective and Contribution (100-150 words)
The paper asks whether a regional (non-research-intensive) public university makes a local economy more resilient to adverse shocks, chiefly manufacturing decline (p. 1). It contributes in two ways (p. 2). First, it studies resilience, which the university-growth literature had not examined. Second, it proposes a new identification strategy: states placed normal schools (teacher training) and insane asylums in 1830–1930 using similar site-selection criteria, but normal schools grew into regional universities while asylums stayed small. Asylum counties therefore serve as the counterfactual for normal counties. The authors show that a regional university roughly offsets the effect of manufacturing exposure, and they evaluate university spending and bachelor's share as mediators (abstract, p. 1; pp. 13–15). The focus on regional public universities is argued to be policy relevant because they award a large share of U.S. bachelor's degrees (about 21% in 1980; p. 1).

## Methodology (200-300 words)
**Data.** Historical locations and opening years of normal schools (Ogren 2005) and asylums (1923 special census); 1840 county characteristics; 1980 IPEDS, Census and BEA data; BEA employment, population, earnings and transfers through 2018 (pp. 5, 9).

**Design.** A county-level comparison of normal counties with asylum counties, within state. The main specification is (eq. 1, p. 9):

$$y_i = \beta_1\,\text{Normal}_i + \beta_2\,\text{MfgExposure}_i + \beta_3\,\text{Normal}_i\times\text{MfgExposure}_i + \alpha_s + X_i\gamma + \varepsilon_i$$

where $y_i$ is long-run percentage growth of employment, population, earnings or transfers; $\text{Normal}_i$ indicates a normal school county; $\text{MfgExposure}_i$ is the 1978 manufacturing employment share (Rust Belt states, growth 1978–2018) or the 2000 share (all states, growth 2000–2018); $\alpha_s$ is a state fixed effect; $X_i$ are controls (log 1950 and 1978/1980 population). The coefficient of interest is $\beta_3$. An event-study version (eq. 2) uses county and state-by-year fixed effects (p. 10).

**Identifying assumption.** Asylum counties are a good counterfactual for what normal counties would have been had their normal schools not become regional universities, and asylums have no direct resilience effect (p. 1).

**Estimation.** OLS, reduced form; IV with normal-school assignment as the instrument for having a four-year regional public university is in the appendix (p. 12).

**Inference.** Rust Belt: heteroskedasticity-robust standard errors and randomization inference (1000 within-state permutations); 2000s: state-clustered standard errors and randomization inference (p. 10; Table 3).

**Threats.** Normal and asylum counties could differ in unobservables; asylum counties still host institutions; fiscal spillovers to asylum counties; the reduced form understates the effect of universities (p. 10). The mechanism analysis relies on sequential ignorability, which the authors do not assume (p. 14).

## Sample and Setting (150-200 words)
The setting is U.S. counties and two shocks: the Rust Belt manufacturing decline after the 1978 peak and the national manufacturing decline starting in 2000 (p. 9). There were 209 normal schools across 204 counties, opened 1839–1930 with a median opening year of 1891 (p. 5). The asylum sample is 160 asylums in 151 counties, after excluding five opened before 1830 (p. 5). Counties with both institutions (25) are coded as normal counties, giving 204 normal and 126 asylum counties (p. 5).

By 1980, 91% of normal counties had a regional college that was formerly a normal school, versus 0.00 in asylum counties (Table 2). The regression sample is 103 counties for the Rust Belt analysis and 320 counties (198 normal and 122 asylum) for the 2000s (Table 3; fn. 27, p. 9). The Rust Belt states are Illinois, Indiana, Michigan, New York, Ohio, Pennsylvania, West Virginia and Wisconsin (p. 9). None of the normal-school universities were Research I in the 1987 Carnegie classification, and nearly 83% were Comprehensive I or II (p. 8).

## Main Findings (200-300 words)
**Normal schools raise higher-education presence but not baseline outcomes.** Enrollment is 11.72% of county population in normal counties versus 4.56% in asylum counties (difference 8.41, SE 1.59), and the population over 25 with a bachelor's degree is 2.04 percentage points higher (SE 0.86) (Table 2). Population and employment growth 1950–1980 are not significantly different (Table 2, p. 8).

**Rust Belt resilience.** Among asylum counties, a 10 percentage point higher 1978 manufacturing share lowers 1978–2018 employment growth by about 24 percentage points. The normal-county interaction is 2.527 (SE 1.132; Table 3, panel A, col. 1), which implies no negative effect of exposure. With state fixed effects and population controls it is 1.967 (SE 0.726), with randomization-inference p-value .009 (Table 3, col. 3).

**National decline after 2000.** The interaction is 0.920 (SE 0.486) in col. 1 and 0.994 (SE 0.486) in col. 3 (Table 3, panel B). Resilience also shows in population growth (1.167, SE 0.656 in the Rust Belt) and earnings per job (4.446, SE 1.561) (Table 3, panel A).

**Other shocks.** The paper reports resilience to the 1980s mining decline (about two thirds rather than full) and to the business cycle (appendices B and C; p. 13).

**Mechanisms.** University spending growth is differentially resilient (Table 4, col. 1). It is about 15% of overall resilience on its own, about 30% with a multiplier of 2, more than one-third once construction spending is considered, and the authors say probably close to half (p. 14). Bachelor's share is higher by roughly 2 percentage points in normal counties (Table 4, col. 2). Descriptive correlations would account for about a third (Rust Belt) and a tenth (2000s) of resilience if read causally (p. 15).

## Key Figures and Tables
**Figure 1 — HISTORY OF NORMAL SCHOOLS AND INSANE ASYLUMS.** Panel a shows opening years and conversion years, panel b shows enrollment and institutionalized population per county population, and panel c maps the counties (p. 4). Asylum and normal-school opening dates overlap within states, and normal-school enrollment is similar to asylum population in the early 20th century and diverges afterward.

**Table 1 — COVARIATE BALANCE: NORMAL SCHOOL, ASYLUM, AND ALL OTHER COUNTIES.** Means and state-fixed-effect differences for geography and 1840 characteristics (p. 6). Normal counties differ from all other counties (log population 0.27, SE 0.08; log manufacturing capital stock 0.49, SE 0.14), but differences with asylum counties are mostly small and insignificant. This table is the core balance evidence, and only two of the asylum comparisons reach significance at conventional levels.

**Table 2 — COUNTY CHARACTERISTICS IN 1980.** Higher-education sector and county characteristics for normal and asylum counties (p. 7). It documents the first stage (0.93, SE 0.02) and shows few other differences, with lower log median family income (−0.04, SE 0.02) and higher retail share (1.13, SE 0.31) in normal counties.

**Figure 2 — DIFFERENTIAL EFFECT OF MANUFACTURING EXPOSURE ON NORMAL COUNTIES RELATIVE TO ASYLUM COUNTIES.** Event-study coefficients on log employment for the Rust Belt (panel a) and 2000s (panel b) shocks (p. 10). The differential effect begins after the base year, which the authors read as evidence against pre-existing differences.

**Table 3 — THE DIFFERENTIAL EFFECT OF MANUFACTURING SHARE ON NORMAL AND ASYLUM COUNTIES.** Main estimates of equation (1) for employment, population, earnings and transfers (p. 11). Rust Belt estimates are noisier (103 counties); the two panels give similar patterns with different samples.

**Table 4 — MEDIATION ANALYSIS, EFFECT OF NORMAL SCHOOLS, AND MANUFACTURING ON POTENTIAL MEDIATORS.** Effects on university spending growth, 1980 bachelor's share and change in bachelor's share (p. 14). The normal-by-manufacturing coefficient is 0.480 (SE 0.277) for spending in the Rust Belt and 0.130 (SE 0.0684) in the 2000s.

## Critical Analysis (300-400 words)
The identification is a clever but historical selection-on-unobservables argument. The evidence is largely qualitative (Humphreys 1923, Kirkbride's plan, a newspaper account of Kankakee; pp. 3–5) plus balance tests. Balance is good on observed 1840 and 1920 variables, but a few differences remain (Table 1: within 150 miles of the state capital −0.11, p < 0.1; nonocean navigation −0.81, p < 0.05), and 17% of asylum counties also received a normal school (p. 5), which suggests overlapping selection but also contamination. The counterfactual is a county with a different state institution rather than no institution, so the estimate is a university effect relative to an asylum, not relative to nothing. The asylum county still has nearly double the institutionalized population of normal counties in 2010 (p. 5), so the asylum has not been shown to have a zero direct effect.

Pre-trends are only partly addressed. Table 2 shows no differential 1950–1980 growth, and Figure 2a shows the differential effect appearing after 1978, but the design is a continuous-exposure interaction, which identifies the effect of the normal-school/asylum difference only if that difference is orthogonal to manufacturing-share heterogeneity, which cannot be directly tested. Controls for 1950 and 1978/1980 population are included to improve precision. Inference is fragile in the Rust Belt (103 counties, unclustered robust SEs; randomization-inference p-values range from .001 to .102 across columns of Table 3, panel A). The reduced form understates the effect of universities because 9% of normal counties lack one (p. 9), and the authors say the matching alternative gives different results (p. 12).

The mechanism section is explicitly suggestive. Spending's share relies on borrowed multipliers (1.25 to 5 or more), and the bachelor's-share evidence is correlational because sequential ignorability is unlikely (p. 14). The effect is also external-validity limited: the shocks did not directly hurt universities (fn. 7, p. 2).

For the reader's project, the paper transfers partly. The within-state "similar institution" comparison, the exposure-by-treatment interaction, and the event study are reusable for 2-year colleges, and Table 2 shows normal and asylum counties do not differ in two-year colleges (−0.22, SE 0.31). But the treatment here is four-year regional universities with enrollment above 10% of county population, outcomes are employment, earnings and population rather than firms, industry mix or patents, and the identifying history (normal schools becoming universities) has no counterpart for community colleges. Firm and patent outcomes would need different data.

## Research Gaps and Future Directions
- Authors call for work on whether regional universities matter because they are public or because they are large relative to population (p. 16).
- Intensive-margin question: whether expanding existing universities has similar effects and whether there are returns to scale (p. 16).
- Other plausible channels left for future work: innovation, entrepreneurship, amenities, agglomeration and industrial growth (p. 13).
- No causal estimate of bachelor's share on resilience exists in the literature they cite (p. 16).
- Resilience to shocks that hit universities directly is not covered (fn. 7, p. 2).

## Implications and Future Research (100-150 words)
For a study of community college openings, this paper provides a template for a within-state comparison with a "consolation" institution, an exposure-by-treatment interaction to detect resilience rather than average growth, and an event-study check for pre-existing differences. It also shows that mechanisms (institutional spending, education levels) can be probed with mediation logic while being honest about sequential ignorability. It does not provide firm, industry-mix or patent outcomes, and the treatment is large four-year universities. A 2-year college design should seek openings with documented runner-up or alternative-institution sites, measure firm outcomes directly, and test whether any effect is stronger in manufacturing-exposed counties.

## Keywords/Tags
#local-resilience #regional-universities #normal-schools #manufacturing-decline #rust-belt #historical-natural-experiment #mediation-analysis #higher-education #county-fixed-effects #randomization-inference

## Related Papers
- [[Andrews (2023)]] The paper says its identification strategy is most similar to Andrews (2021) and complementary to it: that work compares university sites with runners-up for local invention, this paper compares with asylum counties for resilience.
- [[Kantor & Whalley (2014)]] Cited as a study of research-intensive universities finding no employment spillovers of university spending but effects on income (fn. 25, p. 9).
- [[Hausman (2022)]] Cited for effects of university innovation on employment and wages, a research-intensive contrast to the regional universities studied here.
- [[Schweiger, Stepanov, & Zacchia (2022)]] Another long-run study of a historical institutional shock; it differs in using matching in a command-economy setting.
