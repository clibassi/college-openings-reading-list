# Andrews (2023)

> Model-written summary (2026-11-24) of the paper's PDF: the July 6, 2018 working-paper draft ("The Role of Universities in Local Invention: Evidence from the Establishment of U.S. Colleges"), not the published 2023 journal version. All numbers below are from the draft and may differ from the published paper. Not checked against the paper by a person.

## File Name
Andrews_HigherEducationLocalInvention_2023.pdf

## Paper Title
The Role of Universities in Local Invention: Evidence from the Establishment of U.S. Colleges (July 6, 2018 draft; this summary covers the 2018 draft, not the published version).

## Basic Information
- Authors: Michael Andrews
- Year: 2018 draft (hosted PDF dated July 6, 2018); published 2023
- Journal: Published as "How Do Institutions of Higher Education Affect Local Invention? Evidence from the Establishment of US Colleges," American Economic Journal: Economic Policy 15(2): 1–41 (2023). The hosted PDF is the pre-publication draft, which is not a journal version. The published citation was supplied by the requester and is not in the dump.
- Field: Economics of innovation; economic history
- Subfield: Universities and local invention; place-based effects of higher education
- Study type: Quasi-experimental difference-in-differences using "runner-up" site-selection natural experiments (causal), plus descriptive linked-data decomposition of inventors

## Objective and Contribution (100-150 words)
The paper asks whether establishing a college causes local invention, whether colleges are necessary for it, and through what channel. The author argues colleges are not randomly sited and builds a cleaner counterfactual than earlier work. He uses narrative histories of 432 colleges to find finalist "runner-up" counties, then keeps only "high quality" cases where the site choice approximates random assignment (p. 7-8). Contributions: (1) a new college raises county patenting by "about 40%" relative to runners-up in the paper's wording (p. 4); the 0.401 log-point coefficient implies about 49%; (2) "consolation prize" counties that received prisons, hospitals or asylums show statistically indistinguishable patenting, so colleges are not necessary (p. 5, p. 21); (3) the effect runs largely through population and migration, and the author cannot reject zero effect after controlling for population (p. 5, p. 25). The paper also builds a college yearbook dataset linked to patents and the census.

## Methodology (200-300 words)
**Data.** U.S. patents, 1836-2010, from four sources spliced together, aggregated to county using census town-to-county matching (p. 10-11). Controls come from NHGIS decennial data, and student counts from Commissioner of Education reports (p. 11). Counties are aggregated to their largest historical boundaries (p. 11). Yearbooks from 20 colleges (249 yearbooks, 1879-1940; 70,106 seniors and 28,743 faculty entries) are linked to 100% census data (p. 27).

**Design.** Greenstone, Hornbeck and Moretti-style runner-up design. Of 432 colleges, 193 have identifiable finalists, and 76 are judged "high quality" (four predate the patent data, leaving 72) (p. 7-8). Quality is judged from narrative history: close votes, similar bids, scarce infrastructure, or quirky random events (p. 8).

**Identifying assumption.** Within a finalist set, the winner is as good as random, so college and runner-up counties would have followed parallel patenting paths absent the college. Support offered: balance on census covariates (Figure 2), parallel pre-trends (Figures 3-4), and a placebo (Table 15).

**Estimation.** Equation (1), a grouped difference-in-differences (p. 13):

$$PatentMeasure_{ijt} = \delta_1\, College_{ij}\cdot PostCollege_{jt} + \delta_2\, PostCollege_{jt} + \alpha_i + \lambda_j + \alpha_i\lambda_j + \gamma_t + \varepsilon_{ijt}$$

Here $i$ is county, $j$ is experiment, $t$ is year, $\alpha_i$ is a county effect, $\lambda_j$ an experiment effect, $\gamma_t$ a year effect. $\delta_1$ is the effect of interest. A triple-difference (Equation 2) adds low quality experiments.

**Inference.** Standard errors are clustered by county. The paper reports that other clustering levels, including multiway, give virtually identical inference (p. 15, fn. 18).

**Threats.** Unobserved differences between winners and runners-up, spillovers from runners-up violating SUTVA (p. 20), patent counts as a noisy innovation proxy (p. 5, fn. 5), and subjective high/low quality coding.

## Sample and Setting (150-200 words)
The baseline sample has 72 high quality college site selection experiments, 179 counties and 39,580 county-year observations (Table 3). Experiments run from 1839 to 1954, with a mean year of 1885.74 and a median of 1885.50 (Table 2). Each college has on average 2.83 runner-up sites (Table 2). Runner-ups average 138.06 km from the college, with a median of 92.85 km (Table 2). The text describes this as far enough to be in different labor markets but close enough to share regional shocks (p. 12). Colleges are classified into seven types: land grant (0.42 of the sample), technical (0.10), normal (0.17), HBCU (0.04), military (0.04), other public (0.17), other private (0.07) (Table 2). The text notes the plurality are land grants (p. 12). The average county had about 4.8 patents in 1880 (4.845, Table 3) and about 37.5 per year by 2010 (p. 15). The setting is the 19th to mid-20th century U.S., an era of small colleges with few students. The paper notes that colleges begin with small student and faculty populations (p. 16).

## Main Findings (200-300 words)
**Colleges raise patenting.** College counties have more patents per year than runners-up: 0.401 log points (SE 0.143, Table 3, col. 1), which the paper calls "about 40%" but implies about 49% (exp(0.401) − 1). The inverse hyperbolic sine gives 0.484 (col. 2), the alternative log gives 0.264 (col. 3) and the negative binomial gives 0.857 (col. 4). The text says that in 2010 this is just over 16 additional patents per year (p. 15).

**Dynamics.** Pre-college coefficients are near zero. The gap becomes significant after the first decade, stays roughly constant for about thirty years, and widens after about 50 years (Figure 4, p. 16-17).

**Low quality experiments overstate effects.** The triple-interaction is negative (-0.326, Table 4, col. 1), so including non-random cases inflates estimates (p. 17-18).

**Colleges are not necessary.** Relative to consolation-prize counties, the effect is 0.188 (SE 0.214, Table 5, col. 1) and 0.088 with a population control (col. 2). Excluding consolation-prize counties gives 0.480 (col. 3). Practical and classical colleges differ little: 0.388 versus 0.348 (Table 5, col. 4), never statistically different (p. 23).

**Population explains most of it.** College counties are larger by 0.379 in log population (Table 6, col. 2). Controlling for log population cuts the effect to 0.178 (col. 3) and with a quadratic to 0.141 (col. 4), both insignificant. The text concludes population explains 60% to two-thirds of the effect (p. 25). No agglomeration premium appears in college counties (Table 6, cols. 5-6).

**Who patents.** In college counties, 14.6% of patents are by alumni, 4.9% by faculty, 7.3% by non-migrants and 73.2% by migrants (p. 30). No patent quality difference appears in citations or first-claim length (p. 19-20).

## Key Figures and Tables
**Figure 2 — Balance Checks.** Compares college counties with runner-ups and with non-experimental counties in the last census year before establishment. Runners-up are statistically indistinguishable from college counties. Non-experimental counties differ on population, urbanization, interstate migrants, manufacturing and prior colleges (p. 13). This is the core credibility evidence for the design.

**Figure 3 — Patenting in College, Runner-Up, and Non-Experimental Counties.** Plots smoothed log(patents+1) residualized on year effects around year 0. College and runner-up counties track each other before the college and diverge afterward, mainly after several decades. Both sit far above non-experimental counties, so site choice was nonrandom in general (p. 14).

**Figure 4 — Dynamics of Treatment Effect.** Event-study coefficients by ten-year bins with 95% bands. Pre-period bins are near zero. The effect is significant after the first decade and flat for roughly thirty years. Because few graduates exist early, this suggests the gain is not from human capital output (p. 16).

**Table 3 — Baseline Regression Results.** Four specifications give a college effect of 0.401, 0.484, 0.264 and 0.857, all significant. N is 39,580 county-years, 179 counties and 72 experiments. Standard errors are clustered by county. This is the headline estimate.

**Table 5 — Consolation Prize and College Type Results.** Colleges versus consolation-prize runners-up give an insignificant 0.188 (col. 1), and 0.088 with population (col. 2). Practical versus classical interactions are 0.388 and 0.348 (col. 4). Only 34 counties and 16 experiments feed cols. 1-2, so power is limited.

**Table 6 — The Effect of Population on Patenting.** Shows the college effect on population (0.379, col. 2) and the shrinkage of the patent effect once population is controlled (0.178 and 0.141, cols. 3-4). The interaction tests in cols. 5-6 find no extra agglomeration in college counties. Observations are limited to census years (1,092 in cols. 3-6).

**Table 7 — Patents by Alumni and Faculty.** In the dump the alumni and faculty rows show 0.000 patents, which conflicts with the 14.6% and 4.9% in the text (p. 30). The extraction or the table itself looks wrong, so rely on the text figures only.

## Critical Analysis (300-400 words)
The runner-up design is the paper's real contribution. Restricting to 72 of 193 identifiable cases using narrative evidence is more credible than assuming random siting, and the triple-difference in Table 4 shows low-quality cases inflate estimates. Balance on observables (Figure 2) and flat pre-trends (Figures 3-4) support the design. The placebo in Table 15 gives an insignificant 0.062.

Remaining concerns. First, high-quality coding is a subjective, undocumented-in-the-paper-body judgment. The author reports leave-one-out and reclassification robustness only as "available upon request" (p. 66). Second, sample size is small: 179 counties, and the treatment effect varies widely across experiments (Figure 9). Third, treatment is the whole county-level shock of a college, bundling students, faculty, construction and its role as an anchor. Fourth, the SUTVA argument is double-edged: the paper says nearby runners-up show little difference and reads this as a spillover, which could equally mean the control is contaminated (p. 20, Table 18). Fifth, the "cannot reject zero after controlling for population" claim treats population as an outcome of the college. The text controls for it anyway (Table 6), so population is a bad control and the result is mediation evidence rather than a clean causal decomposition. The drop from 0.430 to 0.178 comes with wide standard errors, and the author cannot reject either zero or the baseline. The "not necessary" claim rests on only 34 consolation counties. The migrant share of 73.2% is a descriptive name-matching result with acknowledged false-match problems (p. 29-30), and Table 7 looks internally inconsistent in this extraction.

Draft versus published: this note is of the 2018 draft only, and the published AEJ version may have revised estimates or framing.

Causal claims: the average effect (0.401 log points) is plausibly causal. The channel claims (migration, no independent effect) are suggestive, not identified. Patent quality shows no change in citations or claim length, but pre-1947 citations are mostly zero (p. 20).

Relevance to community college openings. The runner-up logic transfers if finalist sites for 2-year colleges can be documented, but the data would be modern. Patents are rare for county-level two-year college outcomes, so firm or industry mix outcomes would add power. The migration and anchor-institution finding suggests 2-year openings could act through population and firm entry more than through research, and the consolation-prize test offers a template. The 19th-century setting, small colleges and county patenting data do not map directly onto modern commuter colleges with local workforce missions.

## Research Gaps and Future Directions
- Author's stated gap: track alumni across time and space using census data to see where they move and invent (p. 32).
- Causal effect of college attendance on patenting at different skill levels remains open (p. 30).
- How the college-invention relationship has changed over time, since modern invention may depend more on proximity to academic research (p. 31).
- Global versus local effects: alumni may invent elsewhere (p. 31-32).
- Not addressed in this draft: modern or two-year institutions, firm-level and industry-mix outcomes, and non-patent innovation.

## Implications and Future Research (100-150 words)
For policy, the draft concludes that attracting migrants, not building colleges per se, is the lever for creating inventive hubs (p. 32). Colleges and other anchor institutions such as prisons or asylums produced similar patenting gains in this historical setting. For the reader's project on 2-year college openings, the paper offers a design template: document finalist sites from narrative sources, screen for near-random selection, and test against consolation-prize alternatives. It also warns that county-level gains may reflect population relocation rather than new invention, so outcomes should include population or employment controls and distinguish new firm entry from relocation. The draft's patent-based estimates should not be carried over to modern settings without caution.

## Keywords/Tags
#universities-and-invention #runner-up-design #natural-experiment #difference-in-differences #patents #migration #economic-history #place-based-policy #jel-o31 #jel-i23

## Related Papers
[[Kantor & Whalley (2014)]] Studies knowledge spillovers from research universities using endowment value shocks, which the draft cites as an alternative identification strategy.
[[Liu (2015)]] Uses synthetic control on the land-grant program; the draft argues synthetic control is less suitable in historical data with missing predictors (p. 9).
[[Hausman (2022)]] Studies university innovation and local growth; cited in the draft as a recent attempt at causal identification (as Hausman 2017).
[[Lee (2018)]] UC Merced synthetic control study that the draft cites on the economic impact of a new campus.
[[Bonander, Jakobsson, Podestà, & Svensson (2016)]] Synthetic control estimates of Swedish research universities, cited alongside the draft's methodological discussion.
