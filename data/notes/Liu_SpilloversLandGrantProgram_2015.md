# Liu (2015)

> Model-written summary (2026-11-24) of the paper's PDF: published version, Journal of Urban Economics 87 (2015) 25–41 (received 16 November 2013, revised 3 March 2015). Not checked against the paper by a person.

## File Name
Liu_SpilloversLandGrantProgram_2015.pdf

## Paper Title
Spillovers from universities: Evidence from the land-grant program

## Basic Information
- Authors: Shimeng Liu
- Year: 2015
- Journal: Journal of Urban Economics 87, 25–41
- Field: Urban economics; economic history
- Subfield: University spillovers and agglomeration; long-run effects of higher education investment
- Study type: Quasi-experimental historical study (county-level synthetic control followed by pooled event study)

## Objective and Contribution (100-150 words)
The paper estimates short- and long-run effects of universities on geographic clustering of economic activity, labor market composition and local productivity, and interprets a productivity effect in a non-education sector as evidence of local spillovers (abstract, p. 1). The treatment is the designation of land-grant universities after the Morrill Act of 1862, treated as a natural experiment once confounders are controlled with synthetic control counties and an event-study design (p. 1). Outcomes are log population density, the share of manufacturing workers in the population, and manufacturing output per worker, observed in decennial censuses 1840–1940. The contribution is a long-horizon (80-year) estimate for a large federal higher-education shock, which most of the earlier literature, focused on patents and start-ups over short horizons, does not provide (p. 1). The author also separates, in a back-of-envelope step, agglomeration from direct spillovers (p. 9).

## Methodology (200-300 words)
**Data.** County-level decennial data from the U.S. census (Haines and ICPSR, 2010), NHGIS geography, IPEDS and the Association of Public and Land-grant Universities for designation, and 1870 market access from Donaldson and Hornbeck (2012). The sample is a balanced panel of 1180 U.S. counties, 1840–1940, with boundaries held at their 1840 definition and dollars in 1840 dollars (p. 6).

**Design.** Step one builds a synthetic control county for each designated county from donor counties in the same state, requiring a sufficient number of same-state controls (p. 2, p. 5). Step two pools the treated–synthetic pairs in an event study. Intervention is set to 1870 and the 1860 event-time dummy is normalized to zero (p. 6, fn. 26).

**Identifying assumption.** Historical sources are read as showing designation was driven by idiosyncratic local factors (donated land, a donor's choice of Ithaca), and cited work finds locations close to random (pp. 2–3). Matching on pre-1860 outcomes and covariates is meant to handle the remaining selection, including the rural tilt of land-grant sites.

**Estimation.** Synthetic weights solve $\min_W \sum_{m=1}^{k} v_m (X_{1m} - X_{0m}W)^2$ (Eq. 4), with $X_1$ the treated county's predictors, $X_0$ the donor-pool matrix, $W$ nonnegative weights summing to one and $v_m$ predictor weights. The event study is

$$Y_{jt} = \sum_n \beta_n D^n_{jt} + \delta_j + \delta_t + \epsilon_{jt}$$

(Eq. 5), where $Y_{jt}$ is the outcome in county $j$ and year $t$, $D^n_{jt}=I[t-e_j=n]$ (Eq. 6) are event-time dummies, $e_j$ is the designation year, and $\delta_j$, $\delta_t$ are county and year effects.

**Inference.** Standard errors are clustered at the case level (a treated county and its synthetic counterpart). The author notes that synthetic control does not allow large-sample inference, so 20 random-assignment placebo runs are used (p. 12).

**Threats.** Concurrent spatially targeted federal policies, neighbor displacement, and few pre-periods; a theory section (Eqs. 1–2, after Greenstone, Hornbeck, & Moretti 2010) frames direct versus agglomeration effects.

## Sample and Setting (150-200 words)
The setting is the United States after the Morrill Act, signed 2 July 1862, which donated public land to states to fund at least one college teaching agriculture and mechanic arts; 57 land-grant universities resulted (p. 3). Counties are rural-leaning: Table 1 shows designated counties had higher pre-period population density and urban share than the state average (log density 3.5712 vs. 3.3299 in 1860; urban share 0.0956 vs. 0.0407), so comparison with all or rural counties would be biased (p. 6, Table 1). Early development was slow: state support was slim, enrollments grew slowly and attrition was high until the Hatch Act of 1887 and the second Morrill Act of 1890 (p. 3). Designation is therefore a long, slowly maturing treatment. Sample sizes in the regressions depend on the outcome: 462 observations and 42 county fixed effects for density (Table 3), 394 and 40 for manufacturing share (Table 4), 332 and 38 for output per worker (Table 5), and 242 and 22 for the 1890 universities (Table 6). The text does not state the number of treated counties directly in this version. Manufacturing data for 1910 (workers) and 1840 and 1910 (output) are missing (Table 4, 5 notes).

## Main Findings (200–300 words)
**Population density rose, slowly.** Relative to synthetic counties, density in designated counties grew about 0.06 log points (6 percent) within ten years (Table 3, Model 1, year 1870: 0.0613, t = 2.38), 0.0963 by 1900 (t = 1.42) and 0.3689 by 1940 (t = 3.24), described as 45 percent over 80 years (pp. 7, 9). The 40-year effect is about 0.10 log points (11 percent), about one quarter of the 80-year effect (p. 7). Pre-treatment coefficients for 1840 and 1850 are small and insignificant (0.0367, t = 1.01; 0.0137, t = 0.69).

**County heterogeneity is large.** Knox, Tennessee shows about 1.16 log points (219 percent), Penobscot, Maine a lagged effect of 0.44 log points (55 percent), Ingham, Michigan only 0.15 log points (16 percent) and Centre, Pennsylvania a rise then reversal (pp. 6–7, Fig. 2).

**No change in industry mix.** The share of manufacturing workers in the population moved little: all post coefficients are small and insignificant (e.g., 0.0019, t = 0.36 in 1870; Table 4), and the largest effect was 0.6 percentage points 70 years after designation (p. 8).

**Large long-run productivity gain.** Manufacturing output per worker rose by $102 (7 percent) by 1890 (not significant) but by $2136 (57 percent) by 1940 (Table 5, Model 1: 2136.4186, t = 1.80), significant at 10%, p. 9. Assuming a 5 percent urbanization elasticity, density growth of 45 percent implies only a 2.25 percent agglomeration gain, so the author reads the rest as direct spillovers (p. 9).

**Robustness.** The 1890 land-grant universities give similar but less significant results: 0.06 log points at 10 years and 0.27 (31 percent) at 1940 (p. 11, Table 6). Market access, latitude/longitude, and excluding adjacent counties do not change conclusions (Tables 3–5, Models 4–6). In 20 placebo runs the true effect exceeds every placebo (p. 12, Fig. 3).

## Key Figures and Tables
**Fig. 2 — Impact of land-grant universities on population density.** Four example cases (Knox, Penobscot, Ingham, Centre) illustrate immediate, lagged, negligible and reverting effects. The treated and synthetic series track closely through 1860 in each panel (p. 8).

**Table 1 — Overall population density predictor means.** Compares designated counties with the state average, rural counties and counties with colleges. It shows that designated counties differ from all three comparison groups, which motivates synthetic matching (p. 7).

**Table 3 — Short- and long-run effects of 1862 land-grant universities on population density (dependent variable: log of population density; cluster-robust t-ratios in the parentheses).** The core result across six specifications; pre-period coefficients are near zero and 1940 effects range from 0.3604 to 0.3689 (p. 9).

**Table 5 — Short- and long-run effects of 1862 land-grant universities on manufacturing output per worker (dependent variable: Manufacturing Output Per Worker (in 1840 dollars); cluster-robust t-ratios in the parentheses).** Short-run effects are small and insignificant; 1930 and 1940 coefficients are 1261.7632 and 2136.4186 in Model 1 (p. 10).

**Fig. 3 — Impact of land-grant colleges and universities on population density. Placebo tests.** The actual effect path lies above 20 artificial-treatment paths, giving a 5 percent placebo p-value by construction (p. 12).

## Critical Analysis (300–400 words)
**Identification.** The argument rests on a near-random-assignment narrative from secondary histories, plus synthetic matching on 1840–1860 outcomes and covariates. The event-study pre-trend tests (1840 and 1850 coefficients near zero) are reassuring, but they are conducted on synthetic pairs built to match pre-trends, so passing them is partly mechanical. Placebo inference with 20 draws gives a coarse p-value, and the productivity result is only significant at 10% (t = 1.80 in Model 1, falling to 1.64 with division-by-year effects, Table 5). The 80-year estimates compare against a counterfactual that must stay valid for decades; the author concedes that other spatially biased federal policies may respond endogenously, so the estimate is a total program effect (p. 11).

**Interpretation.** The spillover claim is an inference, not a measured mechanism. Output per worker in 1840 dollars from county aggregates cannot separate within-industry productivity from composition and capital deepening, and the back-of-envelope decomposition uses an urbanization elasticity borrowed from other settings (p. 9). The paper also cannot distinguish faculty-business interaction from graduate retention (fn. 3). Density rising 45 percent while the manufacturing share does not move means the productivity gain is not tied to a university-linked industry, which weakens a knowledge-spillover reading relative to a general scale effect.

**Measurement.** County boundaries are held fixed, manufacturing data are missing for some census years, and the sample is limited to counties observed in every census from 1840 to 1940. The number of treated counties is not stated in the text of this version, and the table notes only give counts of fixed effects.

**Transfer to community colleges.** The most useful carry-over is the two-step design: construct within-state synthetic comparison counties for each opening, then pool in an event study with clustered errors and placebo draws. The outcomes and horizon do not transfer directly: 19th century land-grant campuses were four-year research and agricultural institutions in rural counties, with manufacturing productivity measured from census aggregates. Community college openings need modern firm, industry and patent data, shorter horizons and a design that handles many openings with staggered timing. The finding that the industry mix did not respond is a useful prior for industry-mix outcomes.

## Research Gaps and Future Directions
- National-level implications are not studied; the author says the analysis "lacks aggregate economic implications" (p. 12).
- Direct versus agglomeration channels are not separated empirically; the author says this is beyond the paper's scope (fn. 3, p. 9).
- Sector-level effects are not identified because the data are aggregate (p. 11); agriculture is not studied because of data limits (fn. 35).
- Neighboring-county displacement is only addressed by excluding adjacent counties from the donor pool (Model 6).

## Implications and Future Research (100-150 words)
The paper offers three lessons for a study of 2-year college openings and local firms, industry mix and innovation. First, effects of an education institution may take decades, so a short post-window can miss them; here the 40-year effect was one quarter of the 80-year effect. Second, an effect on the level or productivity of local activity need not come with a shift in industry composition (Table 4). Third, a placebo-based design with a donor pool restricted to same-state counties is a feasible template for openings that are not randomly timed. The paper offers no evidence on patents or firm-level outcomes, and its identifying narrative would need to be rebuilt for community colleges, whose siting is typically a deliberate state or local decision.

## Keywords/Tags
#land-grant-universities #university-spillovers #synthetic-control #event-study #agglomeration-economies #manufacturing-productivity #population-density #economic-history #jel-r00 #jel-j24

## Related Papers
- [[Bonander, Jakobsson, Podestà, & Svensson (2016)]] Applies synthetic control to Swedish research-university upgrades and cites this paper as the only other credible causal study they know of.
- [[Kantor & Whalley (2014)]] Cited here for endowment-shock evidence on short-run research spillovers and for the claim that land-grant locations are independent of local conditions.
- [[Andrews & Smith (2025)]] Another land-grant study in this corpus, on colleges and the direction of science.
- [[Hausman (2022)]] A working-paper version (Hausman 2011) is cited here among studies of university innovation and local growth.
