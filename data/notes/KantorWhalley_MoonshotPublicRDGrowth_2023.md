# Kantor & Whalley (2023)

> Model-written summary (2026-11-24) of the paper's PDF: NBER WP 31471, rev. March 2024. Not checked against the paper by a person.

## File Name
KantorWhalley_MoonshotPublicRDGrowth_2023.pdf

## Paper Title
Moonshot: Public R&D and Growth

## Basic Information
- Authors: Shawn Kantor and Alexander T. Whalley
- Year: 2023 (NBER Working Paper 31471, July 2023, revised March 2024)
- Journal: Not reported in this version. The front matter says "NBER Working Paper Series" and that working papers "have not been peer-reviewed" (p. 1). The acknowledgments thank "coeditors" and "three anonymous referees" (p. 1) but name no journal.
- Field: Economics of innovation; economic growth; economic history (JEL H54, N12, N72, O32, R11)
- Subfield: Public R&D, fiscal multipliers, place-based industrial policy
- Study type: Triple-difference with a text-based exposure measure, plus an inventor-migration model and a market-access extension

## Objective and Contribution (100-150 words)
The paper estimates the long-term effect of public R&D on manufacturing growth using NASA contractor spending during the Cold War Space Race (p. 2–3). Because NASA could harvest industries that were already strong in space-relevant technology, spending is endogenous. The authors instead define "space capability" from Soviet space technology, using declassified CIA National Intelligence Estimates matched by text similarity to pre-1958 US patents (p. 4). The contribution is a new county by 2-digit-industry panel for 1947–1992, a first stage showing capability predicts NASA activity, estimates of effects on value added, employment, capital and productivity, and a spatial extension for local versus national effects. The headline is that effects on space sectors are real but modest, with an implied local multiplier of 0.3 to 0.4 and no detectable productivity spillovers (p. 2, 5, 30).

## Methodology (200-300 words)
**Data.** Census of Manufactures at county by 2-digit SIC industry (value added, employment, wages, capital additions) for 1947, 1954, 1958, 1963, 1967, 1972 and 1977–1992 (p. 19). NASA activity is digitized contractor spending for the top 100 contractors (1963–1992) and NASA-owned or funded patents (p. 16). Capability scores use term-frequency cosine similarity between CIA documents and pre-1958 patents (p. 15).

**Design.** A triple difference compares high-capability with low-capability industry-counties, space (transportation, electronics) with non-space industries, before and after Sputnik. "High Space Capability" is an above-median similarity indicator. Space Race is 1959–1972; post-Space Race is 1973–1992 (p. 23).

**Identifying assumption.** Soviet technology choices reflect mission requirements, not US local productivity, so pre-1958 similarity shifts NASA allocations but is unrelated to local trends in space industries (p. 15, 24). The paper tests this with dynamic coefficients before 1958 (Figure 5).

**Estimation.** Equation (1), with $i$ county, $j$ industry, $t$ year:
$$Y_{ijt} = \beta_0 + \beta_1 HSC_{ij}\!\times\! SR_t + \beta_2 HSC_{ij}\!\times\! PSR_t + \beta_3 HSC_{ij}\!\times\! SR_t\!\times\! SI_j + \beta_4 HSC_{ij}\!\times\! PSR_t\!\times\! SI_j + P_{ij}\gamma_t + \delta_i + \theta_j + \gamma_t + \upsilon_{ijt}$$
$HSC$ is high space capability, $SR$ and $PSR$ are Space Race and post-period dummies, $SI$ space industry, $P_{ij}$ pre-1958 patents, and $\delta$, $\theta$, $\gamma$ county, industry and year effects. $\beta_3$ and $\beta_4$ are the parameters of interest (p. 22–23). Spending outcomes also use Poisson pseudo-maximum-likelihood (p. 24).

**Inference.** Standard errors clustered at MSA by industry (p. 23, 32); the number of clusters is not reported.

**Threats.** NASA following trends, military research and skills (Table 4), revenue-based productivity, undercounted military patents, and migration (Table 5) (p. 26–29).

## Sample and Setting (150-200 words)
The setting is the post-Sputnik Space Race. NASA was created in 1958; its budget rose from roughly $7 billion (2021$) in 1961 to about $51 billion in 1966, and contractors employed 376,700 at the 1965 peak, 90% of NASA employment (p. 11–12). The top 10 contractors received nearly 70% of contract spending in 1965 (p. 12), and two sectors, transportation and electronics, received about 89% (p. 24).

The analysis sample has 6,759 industry-county observations from 86 counties and 19 two-digit SIC industries, 1947–1992 (p. 20). Counties must be in an MSA and have pre-1958 patents; cells must report in 1958 and at least eight censuses; North Dakota, South Dakota and Wyoming are dropped (p. 19–20). In 1958 there are 735 county-industry observations, with 76 in space industries (Table 1, p. 54). Mean 1958 value added is $72 million ($1958) and employment 7,760 (Table 1). NASA patents rose from 21 in 1961 to 256 in 1969 (p. 18). Samples are urban, innovative counties, not the whole country.

## Main Findings (200-300 words)
**First stage.** High-capability space industry-counties received more NASA spending: extensive margin 0.07 (0.01) during and 0.08 (0.02) after the race (Table 2, Panel A, col. 1). Poisson estimates imply $264 million ($1958) more during and $240 million more after (Table 2, Panel B, col. 1; text, p. 25). NASA-patent effects are 0.05 (0.02) and 0.12 (0.03) at the extensive margin (col. 3) but statistically insignificant in the Poisson model.

**Manufacturing.** The triple-difference coefficients are 0.35 (0.06) during and 0.38 (0.09) after for log value added, 0.42 (0.08) and 0.36 (0.10) for employment, and 0.31 (0.13) and 0.56 (0.17) for capital (Table 3, cols. 1, 3, 5, p. 58). Capital rises more after the race, which the text attributes to lagged accumulation (p. 26).

**Productivity.** Log TFP effects are −0.04 (0.03) and −0.02 (0.03) (Table 3, col. 7), so there is no sign of technological spillovers (p. 26–27).

**Robustness.** Pre-1958 coefficients are near zero (Figure 5, p. 27). Military and skill controls change little (Table 4). Instrumenting yields 4.96 to 6.10 on spending (p. 32, appendix table A13, not in this dump).

**Multiplier.** The implied local fiscal multiplier is 0.3 during and 0.4 after, below the 0.6 to 0.8 range the authors cite from Ramey (2019) (p. 30).

**Migration and spatial spillovers.** Inventors move toward high-capability space locations: 0.27 (0.10) during and 0.68 (0.23) after (Table 5, col. 1). Adding market-access terms leaves local effects similar and market effects imprecise and near zero (Table 6), so local and national multipliers are similar (p. 39).

## Key Figures and Tables
**Table 1 — Descriptive Statistics of Pre-Space Race Era.** Balance table for 1958 across above and below median capability and space versus non-space industries. The authors read this as showing balance; they report differences in labor income, total patents and Navy patents (p. 21, 54). The tests are per-variable p-values, and the table's column headers are partially scrambled in the dump.

**Table 2 — Space Capability, NASA Spending, and NASA Patents – Extensive Margin and PPML Approaches.** The first stage. Space-industry triple-difference coefficients are positive and significant for spending; the main (non-triple) capability coefficients are near zero in Panel A but negative in the Poisson panel, for instance −33.48 (8.81) in col. 1 during the race (p. 56).

**Table 3 — Space Capability and Manufacturing.** The main results on value added, employment, capital and TFP, with and without MSA by year fixed effects, 6,759 observations (p. 58).

**Table 4 — Space Capability and Manufacturing: Military and Skill Controls.** Adds Army and Navy patents, military spending, defense scientists, non-production worker share, schooling, IBM mainframes and research scientists, with little change in the triple-difference coefficients (p. 59–60).

**Table 5 — Space Capability Differences and Patent Inventor Migration.** County-pair migration odds model with three-way clustering, 11,950 observations (p. 61). Space-industry coefficients 0.27, 0.27, 0.28 (during) and 0.68, 0.62, 0.52 (after) across cols. 1–3.

**Table 6 — Space Capability and Manufacturing: Local and Market Effects.** Adds High Space Market terms from equation (4). Post-race local value added rises to 0.49 (0.12) from 0.38 in Table 3 (col. 1), although the text describes magnitudes as little changed (p. 63).

**Figure 5 — Space Capability and Manufacturing – Space Industry Effect Dynamics.** Year-by-year coefficients with 1958 as base for value added, employment, capital and TFP. The text says 1947 and 1954 coefficients are near zero (p. 27, 52).

## Critical Analysis (300-400 words)
The design is creative and the first stage is strong, but several threats to the causal claim remain.

Exclusion. The instrument-like variable is pre-1958 similarity to Soviet space technology. It can predict growth in transportation and electronics for reasons other than NASA: military missile and aerospace procurement, the broader electronics boom and general technological specialization. The authors control for military patents, spending and skill (Table 4), but they admit military patents are undercounted before Bayh-Dole because the Army and Navy were "license agencies" (p. 18, 28). The split is also binary at the median.

Pre-trends. Only two pre-periods, 1947 and 1954, are available, with 1958 as the base (Figure 5). Because NASA did not exist, the first stage cannot be checked for pre-trends (p. 24). Dynamic coefficients before 1958 do not test differential shocks after 1958.

Interpretation. The triple-difference coefficients are reduced forms of capability on outcomes, and the multiplier divides them by the spending reduced form. That ratio is valid only if capability affects outcomes solely through NASA contractor spending, which the paper does not test with a formal IV, apart from an appendix check (p. 32). The multiplier mixes log-point effects with average levels (p. 28–30). Table 6 changes the post-race value-added coefficient from 0.38 to 0.49 despite the text saying magnitudes are little changed.

Inference. The text describes "two-way" clustering at "MSA × industry"; this reads as one cluster level, and counts are not reported. With 86 counties, effective clusters may be few (p. 23).

Outcomes. TFP is revenue-based and does not separate quantity, quality and price (p. 26–27, fn. 28), so a zero TFP effect is weaker than "no spillovers". The estimates exclude NASA centers and universities, so the authors call the multiplier a lower bound (p. 30–31). The sample is large urban counties and manufacturing only.

External validity. The result concerns mission-oriented procurement from large firms, not open-ended or education funding (p. 40).

Relevance to the project: the text-similarity exposure measure and the county by industry triple difference could be adapted to community college openings, if program content were matched to pre-opening industry technology. The data (manufacturing census to 1992, contractor spending, top-firm patents) do not fit two-year college openings, which are small, local and lack a competing shock.

## Research Gaps and Future Directions
- Non-contractor NASA spending (centers, universities) and non-manufacturing sectors are not measured (p. 6, 30–31).
- Whether non-mission-oriented public R&D has similar returns remains open (p. 40).
- Explaining the negative effect on non-space-sector inventors during the Space Race, flagged as a topic for future work (p. 37).
- Spending effects on innovation are weak; NASA patent attribution is measured with error (p. 17, 24).
- A formal first-stage test of exclusion beyond the controls and appendix robustness.

## Implications and Future Research (100-150 words)
For policy, the paper argues that mission-oriented public R&D raised space-sector output and employment but gave a multiplier at the low end of typical government spending, with no detectable productivity gain (p. 38–40). For the project, the transferable ideas are a pre-period exposure measure built from text similarity, and a county by industry triple difference with industry and county effects to separate targeted from untargeted sectors. The setting is unlikely to transfer directly: community colleges lack contractor-style spending, the manufacturing census does not extend past SIC years used here, and patents (the paper's innovation measure) are sparse for small counties. A better analogue would measure how closely a new college's program offerings match pre-existing local industry technology.

## Keywords/Tags
#public-rd #space-race #triple-difference #fiscal-multiplier #technology-spillovers #text-similarity #inventor-migration #industrial-policy #jel-h54 #jel-o32

## Related Papers
- [[Kantor & Whalley (2014)]] Earlier endowment-shock IV estimate of university spillovers; cited here as university funding with long-term effects on targeted regions (p. 8).
- [[Babbar, Kantor, Whalley, & Zeng (2026)]] Corpus follow-on on space race R&D and automation, same authors; not cited in this version.
- [[Schweiger, Stepanov, & Zacchia (2022)]] Cited as the closest paper: Russian Science Cities created for space and military purposes (p. 7).
- [[Hausman (2022)]] Cited as university funding with long-term effects on local regions (p. 8, 44).
- [[Andrews (2023)]] Cited alongside Hausman as evidence on college establishment and local innovation (p. 8).
