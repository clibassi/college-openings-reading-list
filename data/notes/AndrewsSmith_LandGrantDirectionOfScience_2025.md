# Andrews & Smith (2025)

> Model-written summary (2026-11-24) of the paper's PDF: published version (Shorter Article), Explorations in Economic History 97 (2025) 101669; received 25 April 2024, accepted 1 March 2025, available online 14 March 2025. The online appendix is not in the text dump. Not checked against the paper by a person.

## File Name
AndrewsSmith_LandGrantDirectionOfScience_2025.pdf

## Paper Title
Do local conditions determine the direction of science? Evidence from U.S. land grant colleges

## Basic Information
- Authors: Michael J. Andrews and Alexa Smith
- Year: 2025
- Journal: Explorations in Economic History 97 (2025) 101669
- Field: Economics (economic history; economics of science and innovation)
- Subfield: Direction of research, agricultural innovation, place-based research investment
- Study type: Observational state-level analysis, with an instrument-like control using historical site-selection natural experiments (runner-up counties), plus a county-level distance-heterogeneity analysis

## Objective and Contribution (100-150 words)
The paper asks whether local conditions determine the direction of science, using agricultural research at U.S. land grant colleges (p. 1). It defines "agricultural unrepresentativeness" as the chi-square distance between the crop distribution in the college's county and that in the rest of the state before the college location was decided, and tests whether colleges in unrepresentative counties research crops unrepresentative of the state (pp. 2–4). It then uses historical site-selection natural experiments from Andrews (2023, 2021) to isolate exogenous variation in unrepresentativeness (p. 2), and tests whether unrepresentative locations yield more geographically limited productivity spillovers (p. 7). The contribution is new evidence on place-based research policy: research conducted near intended beneficiaries is more likely to serve them (p. 2).

## Methodology (200-300 words)
**Data.** U.S. Agricultural Censuses 1840–2012 (Haines, Fishback, and Rhode 2018): bushels harvested of seven cereals (corn, wheat, barley, oats, rye, buckwheat, rice) for the 48 contiguous states; publications from OpenAlex classified to crops by title keywords and author institution (pp. 2–4).

**Design.** The key regressor is $\text{Unrep}(\text{College}_s)$, the chi-square distance (standardized to mean 0, SD 1) between the college-county crop shares $a$ and the rest-of-state crop shares $b$, measured in the last census before the location was determined (p. 4, fn. 3):

$$\text{Unrep}(a\,|\,b)=\sum_{k\in K}\frac{\left(\frac{\text{Bushels}_{ka}}{\sum_{l\in K}\text{Bushels}_{la}}-\frac{\text{Bushels}_{kb}}{\sum_{l\in K}\text{Bushels}_{lb}}\right)^{2}}{\frac{\text{Bushels}_{kb}}{\sum_{l\in K}\text{Bushels}_{lb}}}$$

where $K$ is the set of seven crops. The same measure applied to the publication crop distribution gives $\text{Unrep}(\text{Pubs}_{st})$.

**Identifying assumption.** Among the 31 states where the college was chosen as-good-as-randomly from finalists (lots, tied votes, near-tied bids), college and runner-up counties share the same endogenous site-selection forces, so controlling for runner-up unrepresentativeness leaves only the exogenous component (pp. 5–6):

$$\text{Unrep}(\text{Pubs}_{st})=\beta_1\,\text{Unrep}(\text{College}_s)+\beta_2\,\text{Unrep}(\text{RunnerUps}_s)+\text{Year}_t+\epsilon_{st}$$

with $\text{Year}_t$ publication-year fixed effects.

**Estimation.** OLS, eq. (1) without the runner-up control and eq. (2) with it. A county-level eq. (3) regresses cereal yield (bushels per acre) on a "distant county" indicator (above median county-seat distance to the college within the state) and its interaction with $\text{Unrep}(\text{College})$ (p. 7).

**Inference.** Standard errors clustered by state (eq. 1–2) and by county (eq. 3).

**Threats.** Reverse causation or common causes of location and research choice (college willingness to fund agricultural research), publication undercounting, and measurement of unrepresentativeness.

## Sample and Setting (150-200 words)
The setting is the flagship land grant colleges created under the 1862 Morrill Act, which were charged with research benefiting their states, and which received federal research funds under the 1887 Hatch Act (p. 1, fn. 1). The baseline sample covers all 48 contiguous states (Table 1, col. 1: 1071 observations, 48 states). The experiment sample covers the 31 states for which Andrews (2023, 2021) identifies runner-up locations (Table 1, cols. 2–3: 696 observations). The spillover analysis uses 67,566 county-year observations across 3,062 counties (Table 2, col. 1) and 44,312 observations across 2,021 counties in the experiment sample (Table 2, cols. 2–3).

Most colleges were placed in agriculturally representative counties (Fig. 2, panel a; p. 4). Examples: Iowa State University −0.965 and Mississippi State University −0.936 standard deviations, South Dakota State University 2.432 (p. 4). Publication data are thin before the mid-1900s, almost a century after most colleges were established (fn. 5, p. 4), so the research measure largely reflects the 20th and 21st centuries.

## Main Findings (200-300 words)
**Baseline correlation.** A one standard deviation increase in the college county's unrepresentativeness is associated with a 0.266 standard deviation increase in the unrepresentativeness of publications (SE 0.120, significant at 5%; Table 1, col. 1). The introduction summarizes the range as 0.27–0.40 (p. 2).

**Experiment colleges.** In the 31-state experiment sample, the coefficient is 0.402 (SE 0.126; Table 1, col. 2). Controlling for runner-up unrepresentativeness to isolate exogenous variation, it is 0.245 (SE 0.107, 5% level; Table 1, col. 3). The authors read the fall from col. 2 to col. 3 as evidence of some positive endogeneity bias, and the two coefficients differ at the 10% level (p. 6).

**Mechanism evidence (appendix only).** The authors conjecture that colleges exogenously placed in unrepresentative locations may "un-do" some effects through costly extension and outreach investment, and cite appendices C and D, which are not in the dump (fn. 10, p. 6).

**Spillovers.** In the county-level yield regression, the interaction between a distant county and college unrepresentativeness is −35.17 (SE 14.73) in col. 1, −68.11 (SE 33.23) in col. 2 and −75.47 (SE 42.97, 10% level) in col. 3 (Table 2). The text reads these as bushels per acre reductions in yield for more distant counties per one standard deviation in unrepresentativeness (p. 7); the dependent variable mean is 82.68 in col. 1 and 89.99 in cols. 2–3. Distance itself has no significant direct effect on yields (p. 7).

**Robustness.** Appendix F, described in the text, varies the crop measure (acreage), outcome (patents), subsamples, time windows, search terms and distance measures; results are "qualitatively similar" though sometimes imprecise (p. 7).

## Key Figures and Tables
**Figure 1 — Distributions of Crops in Land Grant Counties and the Rest of the State for Select States.** Bar charts of cereal shares in the college county and the rest of the state in the last pre-location census (p. 3). Crop shares are not extractable from the dump; the text describes Iowa and Mississippi as similar and Pennsylvania and South Dakota as different (p. 2).

**Figure 2 — Distribution of Agricultural Unrepresentativeness.** Histograms of $\text{Unrep}(\text{College})$ and $\text{Unrep}(\text{Pubs})$ and a scatter plot between them (p. 5). Most colleges have low unrepresentativeness, and the scatter is the first view of the main result.

**Table 1 — Agricultural unrepresentativeness and the unrepresentativeness of land grant agricultural research.** Eq. (1) and (2) estimates for all colleges, experiment colleges, and experiment colleges with the runner-up control (p. 6). Coefficients are 0.266, 0.402 and 0.245; adjusted R-squared rises from 0.103 to 0.214.

**Table 2 — Unrepresentativeness and productivity spillovers to local counties.** Eq. (3) estimates of the distance-by-unrepresentativeness interaction on cereal yields (p. 8). Interaction coefficients are negative in all columns, with the most credible (col. 3) significant only at 10%. Adjusted R-squared is about 0.005 in all columns.

## Critical Analysis (300-400 words)
The baseline result is a state-level cross-sectional correlation with 48 clusters, and the paper is open about this. The experiment-based version is the more credible causal claim, but its logic depends on strong assumptions: that the endogenous component of unrepresentativeness is identical for the college and runner-up counties and that the exogenous components are orthogonal (pp. 5–6). Runner-up counties are chosen from finalist sets, so the "same endogenous forces" assumption holds only approximately, and the control for $\text{Unrep}(\text{RunnerUps})$ is a single summary measure (its construction is in Appendix B, not in the dump). Power is limited: 31 clusters and one regressor that varies only at the state level, with outcome repeated over publication years. The estimates in cols. 2 and 3 differ at only the 10% level, so "some endogeneity bias" is suggestive.

Measurement is the main threat. Unrepresentativeness is based on seven cereals and a single pre-location census, yet most publications date from the mid-1900s on, "almost a century after most land grant colleges" were founded (p. 4), a period over which state crop mixes changed. The comparison therefore blends historical site selection with later changes in agriculture. Publication data are sparse before the mid-1900s (fn. 5, p. 4), and crop assignment is by title keywords. The paper says robustness to pre-1950 publications and alternative crop sets is in the appendix, which I could not check.

The spillover result is weaker. Table 2 col. 3 is significant only at the 10% level (−75.47, SE 42.97), the adjusted R-squared is about 0.005, and the "distant" indicator is relative to the median distance within each state. The yield outcome sums bushels across seven crops, which mixes crops with different yields per acre, so cross-county variation partly reflects crop mix. The authors' interpretation is a mechanism story rather than direct evidence of research reaching farmers.

For the reader's project, the transfer is indirect. The outcome is the direction of college research and county yields, not firm formation, industry mix or patents by local firms, and community colleges conduct little research. What transfers: the runner-up site-selection experiments of Andrews (2023) can be reused for 2-year colleges; the "unrepresentativeness" idea could be adapted to compare a host county's industry mix with its state's to see whether program offerings or local firm effects track the host county; and the "control for runner-up characteristics" device is a cheap way to separate endogenous siting from exogenous variation. The sample of 31 experiment states and the focus on agriculture limit direct reuse.

## Research Gaps and Future Directions
- The authors leave unexplained why exogenous placement attenuates the effect, and conjecture extension and outreach investment as the reason (fn. 10, p. 6).
- Crop-level analyses linking local crop shares to publications and yields are in the appendix, not in the main text (p. 7).
- The paper does not study other types of institution or non-agricultural science.
- Appendices C and D (investment by unrepresentative colleges) and F (robustness) are not in the dump and could not be checked.

## Implications and Future Research (100-150 words)
The paper's message is that research location shapes research direction, which supports siting research near intended beneficiaries (p. 2). For community college openings, it suggests that host-county industry composition may shape what a college offers and whom it benefits, so effects on firms and industry mix may be uneven within a state, with more distant counties benefiting less. Future work could use the same runner-up experiments to test whether colleges in industrially unrepresentative host counties shift local industry mix differently from those in representative counties, and whether benefits decay with distance. Outcomes would be firm entry, industry shares or patents, which this paper does not examine. The measurement of host-versus-state composition with a chi-square-type distance is directly portable to industry employment shares.

## Keywords/Tags
#direction-of-science #land-grant-colleges #agricultural-research #site-selection-natural-experiment #knowledge-spillovers #place-based-policy #economic-history #runner-up-counties #agricultural-productivity

## Related Papers
- [[Andrews (2023)]] Supplies the as-good-as-random college site-selection experiments and runner-up counties that this paper reuses as an identification device.
- [[Baron, Kantor, & Whalley (2018)]] Cited by this paper in the debate over where to locate place-based research investments.
- [[Liu (2015)]] A corpus study of land-grant spillovers; it is the natural comparison for this paper's county-level spillover and distance results.
- [[Howard, Weinstein, & Yang (2024)]] Uses a comparable "alternative institution" counterfactual and cites Andrews's site-selection work, but studies regional universities and resilience.
